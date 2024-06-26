import TodaysQuotes from "@/components/todays-quotes";
import NewArrivals from "@/components/new-arivals/new-arrivals";
import CategoryList from "@/components/category-list/category-list";
import { getDailyBooksByPage } from "./service";

export default function Home() {
  return (
    <div className="flex flex-col px-5 md:px-11 py-6 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-row gap-11 mb-8 md:mb-11 shrink-0">
        <TodaysQuotes />
        <NewArrivals />
      </div>

      <h2 className="font-semibold text-2xl md:text-4xl mb-3 md:mb-6">
        Good Morning
      </h2>

      <div className="flex flex-col gap-8 md:gap-16">
        <CategoryList
          request={getDailyBooksByPage}
          title="Recommended for You"
        />
        <CategoryList request={getDailyBooksByPage} title="Recent Readings" />
      </div>
    </div>
  );
}
