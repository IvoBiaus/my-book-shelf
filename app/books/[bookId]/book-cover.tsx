import NotesSvg from "@/components/icons/notes-svg";
import ReviewSvg from "@/components/icons/review-svg";
import ShareSvg from "@/components/icons/share-svg";
import TBookDetail from "@/types/TBookDetail";
import Image from "next/image";

type TParams = {
  book: TBookDetail;
};

const BookCover = ({ book }: TParams) => {
  return (
    <div className="w-72 gap-7 h-fit rounded-xl bg-white px-8 py-6 flex flex-col justify-between">
      <Image
        placeholder="blur"
        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
        blurDataURL={`https://covers.openlibrary.org/b/isbn/${book.covers[0]}-S.jpg`}
        alt={`${book.title} from ${book.authors[0]}.`}
        className="w-full h-auto object-cover border"
        height={210}
        width={280}
      />
      <div className="flex justify-evenly font-bold text-xs">
        <button className="flex flex-col items-center self-end gap-1">
          <ReviewSvg className="fill-black" />
          Review
        </button>
        <button className="flex flex-col items-center self-end gap-1">
          <NotesSvg className="fill-black" />
          Notes
        </button>
        <button className="flex flex-col items-center self-end gap-1">
          <ShareSvg className="fill-black" />
          Share
        </button>
      </div>
    </div>
  );
};

export default BookCover;
