import connectDB from "../../../db";
import Event from "../../../models/event.model";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDB();

    const data = [
      { name: "avishkaar", eventType: "GROUP", minMember: 1, maxMember: 3 },
      { name: "cineverse", eventType: "GROUP", minMember: 2, maxMember: 3 },
      {
        name: "man-in-the-middle",
        eventType: "GROUP",
        minMember: 2,
        maxMember: 3,
      },
      {
        name: "escape-the-room",
        eventType: "GROUP",
        minMember: 4,
        maxMember: 4,
      },

      {
        name: "brain-o-teaser",
        eventType: "GROUP",
        minMember: 1,
        maxMember: 2,
      },

      {
        name: "the-resume-relay",
        eventType: "SOLO",
      },
      {
        name: "stock-x-stake",
        eventType: "GROUP",
        minMember: 3,
        maxMember: 3,
      },
      {
        name: "memefest",
        eventType: "GROUP",
        minMember: 2,
        maxMember: 3,
      },
      {
        name: "human-or-ai",
        eventType: "SOLO",
      },
      {
        name: "split-or-steal",
        eventType: "SOLO",
      },
      { name: "dataloom", eventType: "SOLO" },
      { name: "devBattle", eventType: "SOLO" },
    ];

    const result = await Event.insertMany(data);
    console.log("EVENT ADDED");
    return NextResponse.json({ message: "record added!" });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
