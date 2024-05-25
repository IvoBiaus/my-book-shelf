import Image from "next/image";
import TBook from "@/types/TBook";
import { getIdFromKey, getRandomNumber } from "@/app/utils";
import Link from "next/link";
import { PATHS } from "@/app/constants";

type TParams = {
  book: TBook;
};

const BookItem = ({ book }: TParams) => {
  return (
    <Link
      href={PATHS.bookDetail(getIdFromKey(book.key))}
      className="flex flex-col gap-3 w-40 h-72 p-4 bg-white rounded-lg shrink-0"
    >
      <Image
        placeholder="blur"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        blurDataURL={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
        alt={`${book.title} from ${
          book.author_name ? book.author_name[0] : "Unknown"
        }. Year ${book.first_publish_year}`}
        className="rounded-md w-auto max-h-[170px] object-cover"
        height={170}
        width={130}
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm line-clamp-1">{book.title}</span>
        <span className="text-xs">
          {book.author_name ? book.author_name[0] : "Unknown"},{" "}
          {book.first_publish_year}
        </span>
        <span className="text-xs">{getRandomNumber(1, 5).toFixed(1)}/5</span>
      </div>
    </Link>
  );
};

export default BookItem;
