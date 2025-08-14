import React from "react";
import GridPattern from "./magicui/animated-grid-pattern";
import { cn } from "../lib/utils";
import BlurFade from "./magicui/blur-fade";
import Image from "next/image";
import GradientAnimatedText from "./GradientAnimatedText";

const HeroSection = () => {
  return (
    <section className="relative pb-16 flex w-full overflow-hidden rounded-lg bg-[hsl(var(--brick-dark))] md:py-16">
      {/* Gradient overlay with theme background */}
      <div className="absolute z-20 inset-0 bg-gradient-to-t from-[hsl(var(--brick-dark))] via-transparent to-transparent"></div>
      
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 max-md:inset-y-[-70%] md:h-[100%] h-[200%] skew-y-12",
          "opacity-70"
        )}
      />

      <div className="relative flex flex-col items-center justify-center h-full mx-auto z-30 px-6">
        <div className="mt-4 flex flex-col items-center">
          <BlurFade inView className="mx-6">
            <h1 className="text-center font-bold tracking-tighter text-5xl sm:text-6xl text-[hsl(var(--primary))] drop-shadow-[0_0_8px_hsl(var(--primary))]">
              <GradientAnimatedText>
                Updates 2k25
              </GradientAnimatedText>
            </h1>
            <div className="my-6">
              <div className="mx-auto rounded-full border-2 border-primary/80 shadow-[0_0_15px_hsl(var(--primary))] overflow-hidden">
                <Image
                  src="/updates-logo.png"
                  alt="Updates Logo"
                  width={1100}
                  height={1100}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;