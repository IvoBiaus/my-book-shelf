import Image from "next/image";
import TBook from "@/types/TBook";
import Link from "next/link";
import { PATHS } from "@/app/constants";
import { getIdFromKey } from "@/app/utils";

type TParams = {
  book: TBook;
};

const NewArrivalItem = ({ book }: TParams) => {
  return (
    <Link
      href={PATHS.bookDetail(getIdFromKey(book.key))}
      className="w-40 py-4 px-5 bg-white rounded-lg shadow-lg shrink-0 group relative"
    >
      <Image
        placeholder="blur"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        blurDataURL={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
        alt={`${book.title} from ${book.author_name?.[0]}. Year ${book.first_publish_year}`}
        className="rounded-md size-full object-cover"
        height={170}
        width={120}
      />
      <span className="absolute top-0 left-0 size-full bg-black/50 rounded p-2 opacity-0 group-hover:opacity-100 duration-300 text-white font-semibold text-sm py-4 px-5">
        {book.title}
      </span>
    </Link>
  );
};

export default NewArrivalItem;
