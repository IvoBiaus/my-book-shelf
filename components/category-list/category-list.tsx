import { Suspense } from "react";

import TBook from "@/types/TBook";
import BookItem from "../book-item";
import CategoryListSkeleton from "./category-list-skeleton";

type TParams = {
  title: string;
  request: () => Promise<TBook[]>;
};

const CategoryList = async ({ title, request }: TParams) => {
  const results = await request();

  return (
    <Suspense fallback={<CategoryListSkeleton />}>
      <div className="flex flex-col gap-3">
        <span className="text-lg md:text-2xl">{title}</span>
        <div className="flex flex-row gap-5 md:gap-10 overflow-auto pb-3 pr-5 ">
          {results.map((book) => {
            if (!book.cover_i) return;
            return <BookItem book={book} key={book.key} />;
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default CategoryList;
