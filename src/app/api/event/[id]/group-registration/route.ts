import { authOptions } from "../../../auth/[...nextauth]/authOptions";
import connectDB from "../../../../../db";
import Group from "../../../../../models/group.model";
import GroupRegistration from "../../../../../models/groupRegistration.model";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const reqBody = await request.json();
    const session = await getServerSession(authOptions);
    if (!session?.user.id && !session?.user.email) {
      return NextResponse.json(
        { message: "Unautheticated User" },
        { status: 401 }
      );
    }
    const membersId: string[] = reqBody.emails.map((item: any) => item.value);
    membersId.push(session?.user.id.toString());

    // const objectIdInstances = membersId.map(
    //   (id) => new mongoose.Types.ObjectId(id)
    // );

    // const existingDocument = await GroupRegistration.findOne({
    //   userId: { $in: objectIdInstances },
    //   eventId: new mongoose.Types.ObjectId(params.id),
    // }).select("_id");

    // if (existingDocument) {
    //   return NextResponse.json(
    //     { message: "Refresh the page!" },
    //     { status: 409 }
    //   );
    // }

    const group = await Group.create({
      eventId: params.id,
      ownerId: session.user.id,
    });

    const data = membersId.map((member: string) => {
      return {
        groupId: new mongoose.Types.ObjectId(group._id),
        eventId: new mongoose.Types.ObjectId(params.id),
        userId: new mongoose.Types.ObjectId(member),
      };
    });

    const groupRegistered = await GroupRegistration.insertMany(data);

    if (!groupRegistered) {
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "Group Registered!" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
