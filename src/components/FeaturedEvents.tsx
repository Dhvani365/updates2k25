import React from "react";
import BlurFade from "./magicui/blur-fade";
import GradientAnimatedText from "./GradientAnimatedText";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { featuredEvents } from "../lib/events";
import Card from "./EventCard";
import Link from "next/link";

const FeaturedEvents = () => {
  return (
    <section className="my-24 mx-4">
      <BlurFade inView className="my-12">
        <div className="flex items-center justify-between max-w-5xl mx-auto px-8">
          <div className="group relative flex max-w-fit flex-row items-center justify-center rounded-2xl py-1.5 text-3xl font-medium backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] ">
            {/* <p
              className={`border-none px-2 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none`}
            >
              Featured Events
            </p> */}
            <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center">
              Featured Events
            </GradientAnimatedText>
          </div>
          <Link href={"/events"} prefetch={true}>
            <Button
              className="rounded-full flex items-center justify-center gap-1 px-3 py-1.5 h-auto"
              variant={"outline"}
            >
              <p className="capitalize text-xs">all events</p>
              <ArrowRightIcon className="size-3.5" />
            </Button>
          </Link>
        </div>
      </BlurFade>

      <BlurFade inView className="my-12">
        {/* card */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-fit mx-auto">
          {featuredEvents.map((data) => {
            return (
              <Link
                href={`/event/${data.id}`}
                className="w-full"
                key={data.id}
                prefetch={true}
              >
                <Card
                  title={data.name}
                  tagline={data.Tagline}
                  coverImage={data.logo}
                  key={data.id}
                />
              </Link>
            );
          })}
        </div>
      </BlurFade>
    </section>
  );
};

export default FeaturedEvents;
