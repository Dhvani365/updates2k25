import React from "react";
import BlurFade from "./magicui/blur-fade";
import GradientAnimatedText from "./GradientAnimatedText";
import Image from "next/image";
import ScheduleImage from "@/assets/eventSchedule.jpg";

const ScheduleSection = () => {
  return (
    <section className="my-24 relative">
      <div className="w-[400px] h-[400px] absolute -translate-x-1/2 -translate-y-1/2 left-1/3 top-1/3 rounded-full blur-3xl bg-gradient-to-br from-slate-900 to-violet-900 opacity-40 overflow-hidden"></div>
      <BlurFade inView className="mb-6">
        <GradientAnimatedText className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none  text-center">
          Schedule
        </GradientAnimatedText>
      </BlurFade>
      <BlurFade inView className="mx-4">
        <div className="overflow-hidden">
          <Image
            src={ScheduleImage}
            alt="Events Schedule"
            className="aspect-video rounded-lg md:rounded-2xl"
            loading="lazy"
          />
        </div>
      </BlurFade>
    </section>
  );
};

export default ScheduleSection;
