import GradientAnimatedText from "../../components/GradientAnimatedText";
import Marquee from "../../components/magicui/marquee";
import {
  decorationTeam,
  graphicsTeam,
  imageData,
  mainCoordinators,
  marketingTeam,
  specialThanks,
  updatesLeads,
  webTeam,
} from "../../lib/static";
import { cn } from "../../lib/utils";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto mb-48 min-h-screen bg-background max-w-7xl relative">
      <GradientAnimatedText className="text-3xl mt-8 mb-2  font-bold tracking-tighter sm:text-3xl xl:text-4xl/none  text-center">
        Gallery
      </GradientAnimatedText>
      <p className="text-center text-pretty tracking-tighter text-lg sm:text-xl xl:text-2xl/none italic text-muted-foreground mt-4">
        Glimpse from Updates 2k23
      </p>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {imageData.map((image, index) => (
            <div
              key={index}
              className={`
              ${index === 0 ? "col-span-2 row-span-2" : ""}
              ${index === 5 ? "col-span-1" : ""}
              ${index === 6 ? "col-span-1" : ""}
              overlow-hidden rounded-lg shadow-lg
            `}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover object-center rounded border shadow-lg shadow-violet-500/15"
              />
            </div>
          ))}
        </div>
      </div>

      <GradientAnimatedText className="text-2xl mt-16 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Main Coordinators
      </GradientAnimatedText>
      <PersonCardList data={mainCoordinators} />

      <GradientAnimatedText className="text-2xl mt-8 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Updates Leads
      </GradientAnimatedText>
      <PersonCardList data={updatesLeads} />

      <GradientAnimatedText className="text-2xl mt-10 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Web Team
      </GradientAnimatedText>
      <PersonCardList data={webTeam} />

      <GradientAnimatedText className="text-2xl mt-10 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Special Thanks
      </GradientAnimatedText>
      <PersonCardList data={specialThanks} />

      <GradientAnimatedText className="text-2xl mt-10 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Marketing Team
      </GradientAnimatedText>
      <MarqueeTeams data={marketingTeam} />

      <GradientAnimatedText className="text-2xl mt-10 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Graphics Team
      </GradientAnimatedText>
      <MarqueeTeams data={graphicsTeam} />

      <GradientAnimatedText className="text-2xl mt-10 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Decoration Team
      </GradientAnimatedText>
      <MarqueeTeams data={decorationTeam} />
    </div>
  );
};

const PersonCardList = ({ data }: { data: PersonProps[] }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 mx-8 mt-6  gap-3 md:gap-6 md:grid-cols-3 md:max-w-xl md:mx-auto"
      )}
    >
      {data.map((person, index) => {
        return (
          <div className="mx-auto" key={person.image}>
            <Image
              alt={person.name}
              src={`/photos/${person.image ? person.image : "avatar.png"}`}
              width={512}
              height={512}
              className="rounded-full shadow-lg shadow-violet-400/15 border-2 border-purple-400/50 mx-auto size-20 md:size-28 object-cover object-center"
              loading="lazy"
            />
            <p className="text-center text-muted-foreground text-sm w-20 md:w-28 mx-auto mt-2 mb-6 capitalize">
              {person.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const MarqueeTeams = ({ data }: { data: PersonProps[] }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background max-md:to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background max-md:to-background/90"></div>
      </div>
      <Marquee pauseOnHover className="[--duration:22s] max-w-7xl mx-auto">
        {data.map((person) => (
          <div className="mx-auto" key={person.image}>
            <Image
              alt={person.name}
              src={`/photos/${person.image ? person.image : "avatar.png"}`}
              width={512}
              height={512}
              className="rounded-full border-2 border-purple-300/50 mx-auto size-16 md:size-24 object-cover object-center"
              loading="lazy"
            />
            <p className="text-center w-20 md:w-28 text-muted-foreground text-sm mt-2 mb-6 capitalize">
              {person.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default page;
