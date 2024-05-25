import Link from "next/link";
import { PATHS } from "@/app/constants";

type TParams = {
  query: string;
  page: string;
};

const ShowMoreButton = ({ query, page }: TParams) => {
  return (
    <Link
      href={PATHS.books(query, +page + 1)}
      shallow
      className="w-40 h-72 p-4 bg-primary rounded-lg shrink-0 text-white font-semibold flex items-center justify-center"
    >
      Show More
    </Link>
  );
};

export default ShowMoreButton;
