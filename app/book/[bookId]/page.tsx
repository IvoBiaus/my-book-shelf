import { PATHS } from "@/app/constants";
import ArrowLineSvg from "@/components/icons/arrow-line-svg";
import LinkButton from "@/components/link-button";
import { getAuthor, getBook } from "@/app/service";
import AboutTheAuthor from "./about-the-author";
import BookCover from "./book-cover";
import BookInfo from "./book-info";
import BuyBook from "./buy-book";

type TParams = {
  params: { bookId: string };
};

const BookDetail = async ({ params: { bookId } }: TParams) => {
  const book = await getBook(bookId);
  const author = await getAuthor(book.authors[0].author.key);

  return (
    <div className="flex flex-col px-5 md:px-11 py-5 md:py-6 overflow-y-auto overflow-x-hidden">
      <LinkButton
        href={PATHS.home()}
        label="Back to books"
        leadIcon={
          <ArrowLineSvg className="group-hover:stroke-grey-text duration-300" />
        }
        className="mb-5"
      />
      <div className="flex gap-8 md:gap-16 mb-10 flex-wrap">
        <BookCover book={book} />
        <BookInfo author={author} book={book} />
        <AboutTheAuthor author={author} book={book} />
      </div>
      <div className="flex gap-8 md:gap-16 md:flex-row flex-col-reverse">
        <BuyBook />
        {typeof book.description === "string" && (
          <div className="flex flex-col gap-6">
            <span className="text-sm">{book.description}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
