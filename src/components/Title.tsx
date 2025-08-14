import React from "react";
import BlurFade from "./magicui/blur-fade";
import { cn } from "../lib/utils";

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <BlurFade inView className={cn("my-12", className)}>
      <h2
        className={cn(
          "text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center",
          className
        )}
      >
        {title}
      </h2>
    </BlurFade>
  );
};

export default Title;
