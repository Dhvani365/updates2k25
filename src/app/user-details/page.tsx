import BlurFade from "../../components/magicui/blur-fade";
import DetailForm from "./_components/Form";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import UserDetail from "../../models/userdetails.model";
import mongoose from "mongoose";
import connectDB from "../../db";
import GradientAnimatedText from "../../components/GradientAnimatedText";
import Image from "next/image";

type Props = {};

const Page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id && !session?.user.email) {
    return redirect("/");
  }
  console.log(session);

  await connectDB();

  const data = await UserDetail.findOne({
    userId: new mongoose.Types.ObjectId(session?.user.id),
  }).select("-userId -createdAt -updatedAt -_id -__v");
  let userData = {};
  if (data) {
    userData = {
      department: data?.department,
      year: data?.year,
      semester: data?.semester,
      enrollmentNo: data?.enrollmentNo,
      phoneNumber: data?.phoneNumber,
    };
  }

  return (
    <div className="mt-8 mb-36">
      <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none ">
        Let&apos;s Get You Started
      </GradientAnimatedText>
      <BlurFade inView className="my-8 mx-8">
        <div className="mx-auto flex flex-col justify-center items-center mt-6">
          <Image
            src={session.user.image || ""}
            alt={session.user.name || "user"}
            height={75}
            width={75}
            className="rounded-full"
          />
          <div className="mt-2 text-lg">{session.user.name}</div>
        </div>
      </BlurFade>
      <BlurFade inView delay={0.2} className="my-8 mx-8">
        <DetailForm userDetails={userData} />
      </BlurFade>
    </div>
  );
};
export default Page;
