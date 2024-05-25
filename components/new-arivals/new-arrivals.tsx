import { Suspense } from "react";

import NewArrivalItem from "./new-arrival-item";
import NewArrivalsSkeleton from "./new-arrivals-skeleton";
import { getTopTrending } from "@/app/service";

const NewArrivals = async () => {
  const newArrivals = await getTopTrending();

  return (
    <Suspense fallback={<NewArrivalsSkeleton />}>
      <div className="p-[2px] relative h-60 rounded-lg bg-gradient-to-b from-secondary-orange to-secondary-purple from-[-25%] to-[125%] flex-1 min-w-0 hidden lg:block">
        <div className="absolute -rotate-90 text-center content-center font-medium h-[60px] w-60 rounded-t-lg top-[90px] -left-[90px] text-2xl bg-gradient-to-l from-secondary-orange to-secondary-purple from-[-25%] to-[125%] z-10">
          <span className="opacity-90 pointer-events-none text-white">
            New Arrivals
          </span>
        </div>
        <div className="rounded-md size-full bg-white py-3">
          <div className="flex gap-12 overflow-x-auto size-full pb-2 pl-24 pr-9">
            {newArrivals.map((book) => {
              if (!book.cover_i) return;
              return <NewArrivalItem book={book} key={book.key} />;
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default NewArrivals;
