"use client";
import { useEffect, useState } from "react";

const TodaysQuotes = () => {
  const [currQuote, setCurrQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrQuote((curr) => (curr + 1) % 4);
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const quotes = [
    {
      quote:
        "There is more treasure in books than in all the pirate's loot on Treasure Island.",
      author: "Walt Disney",
    },
    {
      quote:
        "It is in literature that the concrete outlook of humanity receives its expression.",
      author: "Alfred North Whitehead",
    },
    {
      quote: "Literature is a luxury; fiction is a necessity.",
      author: "G. K. Chesterton",
    },
    {
      quote:
        "While thought exists, words are alive and literature becomes an escape, not from, but into living.",
      author: "Cyril Connolly",
    },
  ];

  return (
    <div className="relative h-60 w-[550px] shrink-0 rounded-lg bg-gradient-to-r from-secondary-orange to-secondary-purple from-[-25%] to-[125%] text-white p-5 md:p-8 max-w-full">
      <h2 className="font-medium text-lg md:text-2xl opacity-90">
        Today&apos;s Quote
      </h2>
      {quotes.map(({ author, quote }, idx) => {
        const isSelected = idx === currQuote;
        return (
          <div
            className="absolute left-0 top-12 w-full p-8 h-fit flex flex-col gap-6"
            key={idx}
          >
            <span
              className={`text-base md:text-xl duration-500`}
              style={{
                opacity: isSelected ? 90 : 0,
              }}
            >
              “{quote}”
            </span>
            <span
              className="text-base md:text-xl self-end duration-1000"
              style={{
                opacity: isSelected ? 90 : 0,
              }}
            >
              - {author}
            </span>
          </div>
        );
      })}
      <div className="absolute flex flex-row gap-2 bottom-8 left-8">
        {quotes.map((_, idx) => (
          <button
            key={idx}
            className={`size-3 border border-white rounded-full ${
              idx === currQuote ? "bg-white" : ""
            }`}
            onClick={() => setCurrQuote(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodaysQuotes;
