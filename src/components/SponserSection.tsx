import React from "react";
import BlurFade from "./magicui/blur-fade";
import GradientAnimatedText from "./GradientAnimatedText";
import Image from "next/image";
import codewinglet from "/public/sponsers/codewinglet.svg";
import vsOverseas from "/public/sponsers/vs-overseas.png";
import msi from "/public/sponsers/msi.png";
import lamont from "/public/sponsers/lamont.png";
import ims from "/public/sponsers/ims.png";
import crony from "/public/sponsers/crony.png";
import samsung from "/public/sponsers/samsung.png";
import solex from "/public/sponsers/solex.png";
import chaipartner from "/public/sponsers/chaipartner.png";
import Link from "next/link";

const SponserSection = () => {
  return (
    <section className="pt-24 relative">
      <div className="w-[300px] sm:w-[600px] h-[600px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full blur-3xl bg-gradient-to-br from-green-900 to-neon-900 opacity-40"></div>
      <BlurFade inView className="mt-12 md:my-12">
        <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center">
          Title Sponsors
        </GradientAnimatedText>
      </BlurFade>
      <BlurFade inView className="">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 m-4">
          <Link
            href={"https://www.codewinglet.com/"}
            target="_blank"
            title="CodeWinglet"
            className="aspect-video scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg flex items-center justify-center"
          >
            <Image
              src={codewinglet}
              alt="Events Schedule"
              // className="aspect-video scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg"
              loading="lazy"
            />
          </Link>
          <Link
            href={"https://www.instagram.com/v.s.overseas/"}
            target="_blank"
            title="V.S Overseas"
            className="aspect-video scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg flex items-center justify-center"
          >
            <Image
              src={vsOverseas}
              alt="Events Schedule"
              // className="scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg"
              loading="lazy"
            />
          </Link>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
        <BlurFade inView className="mt-12 grid grid-cols-1">
          <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center">
            Tech partner
          </GradientAnimatedText>
          <div className="flex flex-col scale-75 md:flex-row justify-center items-center md:gap-12 m-4">
            <Image src={msi} alt="Events Schedule" />
          </div>
        </BlurFade>

        <BlurFade inView className="mt-12">
          <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center capitalize pb-2">
            co sponsor
          </GradientAnimatedText>

          <div className="flex flex-col scale-75 md:flex-row justify-center items-center md:gap-12 m-4">
            <Image src={ims} alt="Events Schedule" loading="lazy" />
          </div>
        </BlurFade>
      </div>

      <BlurFade inView className="mt-12">
        <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center capitalize pb-2">
          gifting sponsor
        </GradientAnimatedText>
      </BlurFade>

      <BlurFade inView className="mt-6">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 m-4">
          <Image
            src={lamont}
            alt="Events Schedule"
            className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
            loading="lazy"
          />
        </div>
      </BlurFade>

      <BlurFade inView className="mt-12">
        <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center capitalize">
          supportive sponsors
        </GradientAnimatedText>
      </BlurFade>
      <BlurFade inView className="mt-6">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 m-4">
          <Image
            src={solex}
            alt="Events Schedule"
            className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
            loading="lazy"
          />

          <Image
            src={crony}
            alt="Events Schedule"
            className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
            loading="lazy"
          />

          <Image
            src={samsung}
            alt="Events Schedule"
            className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
            loading="lazy"
          />

          <Image
            src={chaipartner}
            alt="Events Schedule"
            className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
            loading="lazy"
          />
        </div>
      </BlurFade>
    </section>
  );
};

export default SponserSection;
