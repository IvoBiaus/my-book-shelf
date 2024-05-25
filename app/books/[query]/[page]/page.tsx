import { DOCS_PER_PAGE } from "@/app/constants";
import { getBooksByQuery } from "@/app/service";
import BookItem from "@/components/book-item";
import ShowMoreButton from "@/components/show-more-button";

type TParams = {
  params: {
    query: string;
    page: string;
  };
};

const Books = async ({ params: { query, page } }: TParams) => {
  console.log({ query, page });
  const result = await getBooksByQuery(query, page);

  const hasMore = result.numFound > result.start + DOCS_PER_PAGE;
  const noResults = !result.numFound;

  return (
    <div className="flex flex-col px-11 py-6 overflow-y-auto overflow-x-hidden h-full">
      <div className="flex gap-6 flex-wrap">
        {result.docs.map((i) => (
          <BookItem book={i} key={i.key} />
        ))}
        {hasMore && <ShowMoreButton page={page} query={query} />}
        {noResults && (
          <h1 className="text-5xl max-w-72 leading-relaxed text-center m-auto">
            There are no books matching your search.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Books;
