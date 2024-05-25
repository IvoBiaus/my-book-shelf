import { PATHS } from "@/app/constants";
import ArrowLineSvg from "@/components/icons/arrow-line-svg";
import LinkButton from "@/components/link-button";
import Image from "next/image";
import AboutTheAuthor from "./about-the-author";
import BookCover from "./book-cover";
import BookInfo from "./book-info";
import ProviderA from "@/public/provider-a.png";
import ProviderB from "@/public/provider-b.png";
import { getAuthor, getBook } from "@/app/service";

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
        <div className="rounded-lg bg-white p-8 flex flex-col w-72 shrink-0 gap-7 h-fit">
          <h4 className="font-semibold text-xl">
            <span className="text-primary">Buy</span> this book Online
          </h4>
          <button className="flex gap-4 items-center">
            <Image
              src={ProviderA}
              alt="Buy with Provider A"
              height={30}
              width={30}
            />
            <span className="underline font-medium">Buy Now</span>
          </button>
          <button className="flex gap-4 items-center">
            <Image
              alt="Buy with Provider B"
              src={ProviderB}
              height={30}
              width={30}
            />
            <span className="underline font-medium">Buy Now</span>
          </button>
          <span className="font-semibold text-xs">
            When you buy books using these links the Internet Archive may earn a{" "}
            <span className="underline">small commission.</span>
          </span>
        </div>
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
