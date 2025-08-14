import { ReactNode } from "react";
import { cn } from "../lib/utils";
import AnimatedGradientText from "./magicui/animated-gradient-text";

export default function GradientAnimatedText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimatedGradientText>
      <span
        className={cn(
          `border-none px-2 inline animate-gradient 
           bg-gradient-to-r from-[#39ff14] via-[#00fff7] to-[#39ff14] 
           bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent 
           text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none
           drop-shadow-[0_0_10px_#39ff14]`,
          className
        )}
      >
        {children}
      </span>
    </AnimatedGradientText>
  );
}
