import { getServerSession, User } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import SoloRegistration from "../../../../../models/soloRegistration.model";
import { authOptions } from "../../../auth/[...nextauth]/authOptions";
import connectDB from "../../../../../db";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { eventId } = await request.json();

    if (!eventId) {
      return NextResponse.json(
        { message: "EventId is required!" },
        { status: 404 }
      );
    }

    const session = await getServerSession(authOptions);
    if (!session?.user?.id && !session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthaticated user" },
        { status: 404 }
      );
    }
    const alredyRegistration = await SoloRegistration.findOne({
      userId: session?.user.id,
      eventId: eventId,
    });

    if (alredyRegistration) {
      return NextResponse.json(
        { message: "User Alredy registered!" },
        { status: 409 }
      );
    }

    const soloRegister = await SoloRegistration.create({
      userId: session?.user.id,
      eventId: eventId,
    });

    if (!soloRegister) {
      return NextResponse.json(
        {
          message: "Something Went Wrong!",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "registred" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
