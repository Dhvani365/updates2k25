import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../db";
import Event from "../../../../models/event.model";

import { stringify } from "csv-stringify/sync";
import SoloRegistration from "../../../../models/soloRegistration.model";
import GroupRegistration from "../../../../models/groupRegistration.model";
import mongoose from "mongoose";

import { PipelineStage } from "mongoose";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { eventId } = await request.json();

    const event = await Event.findById(eventId);

    console.log(event);
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    let pipeline: PipelineStage[];
    let result;
    if (event.eventType === "SOLO") {
      pipeline = [
        {
          $match: {
            eventId: new mongoose.Types.ObjectId(eventId),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
            pipeline: [
              {
                $project: {
                  _id: 0,
                  name: 1,
                  email: 1,
                },
              },
            ],
          },
        },
        {
          $lookup: {
            from: "userdetails",
            localField: "userId",
            foreignField: "userId",
            as: "result2",
            pipeline: [
              {
                $project: {
                  _id: 0,
                  createdAt: 0,
                  updatedAt: 0,
                  userId: 0,
                  __v: 0,
                },
              },
            ],
          },
        },
        {
          $addFields: {
            user: {
              $first: "$user",
            },
            detail: {
              $first: "$result2",
            },
          },
        },
        {
          $sort: {
            createdAt: 1,
          },
        },
        {
          $project: {
            _id: 0,
            userId: 0,
            eventId: 0,
            createdAt: 0,
            updatedAt: 0,
            __v: 0,
            result2: 0,
          },
        },
      ];
      result = await SoloRegistration.aggregate(pipeline);
    } else if (event.eventType === "GROUP") {
      pipeline = [
        {
          $match: {
            eventId: new mongoose.Types.ObjectId(eventId),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
            pipeline: [
              {
                $project: {
                  _id: 0,
                  name: 1,
                  email: 1,
                },
              },
            ],
          },
        },
        {
          $lookup: {
            from: "userdetails",
            localField: "userId",
            foreignField: "userId",
            as: "detail",
            pipeline: [
              {
                $project: {
                  _id: 0,
                  createdAt: 0,
                  updatedAt: 0,
                  userId: 0,
                  __v: 0,
                },
              },
            ],
          },
        },
        {
          $addFields: {
            user: {
              $first: "$user",
            },
            detail: {
              $first: "$detail",
            },
          },
        },
        {
          $sort: {
            groupId: 1,
            createdAt: 1,
          },
        },
        {
          $group: {
            _id: "$groupId",
            documents: {
              $push: "$$ROOT",
            },
          },
        },
        {
          $project: {
            documents: {
              $concatArrays: [
                "$documents",
                [
                  {
                    isEmptyRow: true,
                  },
                ],
              ],
            },
          },
        },
        {
          $unwind: "$documents",
        },
        {
          $replaceRoot: {
            newRoot: "$documents",
          },
        },
        {
          $project: {
            user: 1,
            detail: 1,
            isEmptyRow: {
              $cond: {
                if: {
                  $eq: ["$isEmptyRow", true],
                },
                then: true,
                else: "$$REMOVE",
              },
            },
          },
        },
      ];
      result = await GroupRegistration.aggregate(pipeline);
    } else {
      return NextResponse.json(
        { error: "Invalid event type" },
        { status: 400 }
      );
    }
    console.log(result);
    const flattenedResult = result.map((doc: any) => {
      if (doc.isEmptyRow) {
        return {};
      } else {
        return {
          name: doc?.user?.name || "",
          email: doc?.user?.email || "",
          ...doc?.detail,
        };
      }
    });

    const csv = stringify(flattenedResult, { header: true });

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename=${event?.name}.csv`,
        filename: `${event?.name}.csv`,
      },
    });
  } catch (error) {
    console.error("Error generating CSV:", error);
    return NextResponse.json(
      { error: "Error generating CSV" },
      { status: 500 }
    );
  }
}
