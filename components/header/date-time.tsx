"use client";

import CalendarSvg from "../icons/calendar-svg";
import ClockSvg from "../icons/clock-svg";
import { useEffect, useState } from "react";
import Skeleton from "../skeleton";

const DateTime = () => {
  const [today, setDate] = useState<Date>();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-white border border-grey-border rounded-full w-80 flex-row shadow-md overflow-hidden items-center gap-7 px-5 flex-1 justify-around hidden lg:flex">
      <div className="flex flex-row gap-4 items-center flex-1 h-full py-2 justify-center">
        <ClockSvg fillClass="fill-primary" className="shrink-0" />
        {today ? (
          <time>{today.toLocaleTimeString()}</time>
        ) : (
          <Skeleton className="size-full" />
        )}
      </div>
      <div className="flex flex-row gap-4 items-center flex-1 h-full py-2 justify-center">
        <CalendarSvg fillClass="fill-primary" className="shrink-0" />
        {today ? (
          <span>{today.toLocaleDateString()}</span>
        ) : (
          <Skeleton className="size-full" />
        )}
      </div>
    </div>
  );
};

export default DateTime;
