import { Suspense } from "react";

import BookItem from "@/components/book-item";
import { getBooksByQuery } from "../service";
import ShowMoreButton from "@/components/show-more-button";
import { DOCS_PER_PAGE } from "../constants";

type TParams = {
  searchParams: {
    query?: string;
    page?: string;
  };
};

const Books = async ({ searchParams: { query = "", page = "1" } }: TParams) => {
  const result = await getBooksByQuery(query, page);

  const hasMore = result.numFound > result.start + DOCS_PER_PAGE;

  return (
    <div className="flex flex-col px-11 py-6 overflow-y-auto overflow-x-hidden">
      <div className="flex gap-6 flex-wrap">
        {result.docs.map((i) => (
          <BookItem book={i} key={i.key} />
        ))}
        {hasMore && <ShowMoreButton page={page} query={query} />}
      </div>
    </div>
  );
};

export default Books;
