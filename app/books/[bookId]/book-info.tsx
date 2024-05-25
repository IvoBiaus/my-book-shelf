import ArrowSvg from "@/components/icons/arrow-svg";
import CheckCircleSvg from "@/components/icons/check-circle-svg";
import HeadphonesSvg from "@/components/icons/headphones-svg";
import LocationSvg from "@/components/icons/location-svg";
import StarSvg from "@/components/icons/star-svg";
import TBookDetail from "@/types/TBookDetail";

type TParams = {
  author: TAuthor;
  book: TBookDetail;
};

const BookInfo = ({ author, book }: TParams) => {
  const checks = ["Hard Copy", "E - Book", "Audio Book"];

  return (
    <div className="flex flex-col flex-1 min-w-fit">
      <h2 className="text-2xl md:text-4xl mb-2">{book.title}</h2>
      <span className="text-sm mb-2">
        By <span className="underline">{author.name}</span>,{" "}
        {new Date(book.created.value).getFullYear()}
      </span>
      <span className="text-sm text-grey-text-light mb-7">Second Edition</span>
      <div className="items-center gap-5 font-medium text-sm mb-7 hidden md:flex">
        <div className="flex gap-1">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <StarSvg className="fill-yellow-400" key={idx} />
            ))}
        </div>
        <span>25 Currently reading</span>
        <span>119 Have read</span>
      </div>
      <div className="gap-11 mb-10 w-fit hidden md:flex">
        <div className="flex flex-col text-sm gap-2">
          <h6 className="font-bold">Availability</h6>
          {checks.map((item, idx) => (
            <div className="flex items-center gap-2" key={idx}>
              <CheckCircleSvg fillClass="fill-green-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col text-sm gap-2">
          <h6 className="font-bold">Status</h6>
          <span className="bg-green-500 rounded shadow text-white py-1 px-3">
            In Shelf
          </span>
          <div className="flex gap-2">
            <LocationSvg className="fill-primary" />
            <span className="text-sm">CS A-15</span>
          </div>
        </div>
        <button className="rounded bg-grey-text px-4 py-2 h-fit flex items-center gap-2 self-center">
          <span className="text-white text-sm">Add to list</span>
          <ArrowSvg className="fill-white" />
        </button>
      </div>
      <div className="flex gap-10 font-semibold text-white text-base md:text-xl w-full">
        <button className="rounded bg-primary-light h-10 md:h-14 min-w-0 max-w-fit px-2 md:px-4">
          BORROW
        </button>
        <button className="rounded bg-green-500 h-10 md:h-14 min-w-fit flex items-center max-w-fit">
          <span className="border-r border-white h-full px-2 md:px-4 shrink-0 content-center">
            Read Now
          </span>
          <HeadphonesSvg className="fill-white mx-2 md:mx-4 shrink-0" />
        </button>
      </div>
    </div>
  );
};

export default BookInfo;
