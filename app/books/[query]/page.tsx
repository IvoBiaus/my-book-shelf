import { PATHS } from "@/app/constants";
import { redirect } from "next/navigation";

type TParams = {
  params: { query: string };
};

const EmptyPage = ({ params: { query } }: TParams) => {
  redirect(PATHS.books(query));
};

export default EmptyPage;
