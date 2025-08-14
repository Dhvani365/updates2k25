"use client";

import React, { useState, useEffect } from "react";
import BlurFade from "./magicui/blur-fade";
import GradientAnimatedText from "./GradientAnimatedText";

interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter: React.FC = () => {
  const countdownDate = new Date("2024-09-20T09:00:00").getTime();

  const [state, setState] = useState<TimeState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewTime(intervalId);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const setNewTime = (intervalId: NodeJS.Timeout) => {
    const currentTime = new Date().getTime();
    const distanceToDate = countdownDate - currentTime;

    if (distanceToDate <= 0) {
      setIsHidden(true);
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

    setState({ days, hours, minutes, seconds });
  };

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center text-muted-foreground scale-[0.6]  ${
        isHidden ? "hidden" : ""
      }`}
    >
      <BlurFade inView delay={0.5}>
        <GradientAnimatedText className="font-bold p-2 text-3xl xl:text-4xl/none text-center">
          Begins In...
        </GradientAnimatedText>
      </BlurFade>
      {/* <BlurFade inView delay={0.5}>
        <h1 className="text-center text-3xl pb-4 font-semibold text-card-foreground/80">
          Begins In
        </h1>
      </BlurFade> */}
      <BlurFade inView delay={0.9} className="flex justify-center space-x-4 ">
        <div className="text-center">
          <div className="text-6xl font-bold">{state.days}</div>
          <small className="text-lg">Days</small>
        </div>
        <div className="text-6xl font-bold">:</div>
        <div className="text-center">
          <div className="text-6xl font-bold">{formatNumber(state.hours)}</div>
          <small className="text-lg">Hours</small>
        </div>
        <div className="text-6xl font-bold">:</div>
        <div className="text-center">
          <div className="text-6xl font-bold">
            {formatNumber(state.minutes)}
          </div>
          <small className="text-lg">Minutes</small>
        </div>
        <div className="text-6xl font-bold">:</div>
        <div className="text-center">
          <div className="text-6xl font-bold">
            {formatNumber(state.seconds)}
          </div>
          <small className="text-lg">Seconds</small>
        </div>
      </BlurFade>
    </div>
  );
};

export default Counter;
