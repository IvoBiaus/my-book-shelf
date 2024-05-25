import Image from "next/image";
import TBookDetail from "@/types/TBookDetail";
import { getIdFromKey } from "@/app/utils";
import Link from "next/link";
import { PATHS } from "@/app/constants";
import { getAuthorOtherWorks } from "@/app/service";

type TParams = {
  author: TAuthor;
  book: TBookDetail;
};

const AboutTheAuthor = async ({ author }: TParams) => {
  const otherWorks = await getAuthorOtherWorks(author.key);

  return (
    <div className="max-w-[445px] w-full rounded-xl bg-white p-8 overflow-clip h-fit">
      <h3 className="text-xl font-semibold">
        <span className="text-primary">About</span> the Author
      </h3>
      <div className="flex items-center my-4">
        <h3 className="text-xl">{author.name}</h3>
        {author.photos && (
          <Image
            alt={author.name}
            placeholder="blur"
            aria-hidden
            src={`https://covers.openlibrary.org/a/id/${author.photos[0]}-M.jpg`}
            blurDataURL={`https://covers.openlibrary.org/a/id/${author.photos[0]}-S.jpg`}
            className="m-auto w-auto rounded"
            height={100}
            width={90}
          />
        )}
      </div>
      <span className="text-sm whitespace-pre-line line-clamp-6">
        {typeof author.bio === "string"
          ? author.bio ?? "Currently we don't have this author's bio :("
          : author.bio?.value}
      </span>
      <h4 className="text-sm font-bold my-4">Other books</h4>
      <div className="flex gap-5">
        {otherWorks.map((work) => (
          <Link href={PATHS.bookDetail(getIdFromKey(work.key))} key={work.key}>
            <Image
              className="bg-slate-700 w-[75px] h-[100px] object-cover"
              placeholder="blur"
              src={`https://covers.openlibrary.org/w/olid/${getIdFromKey(
                work.key
              )}-M.jpg`}
              blurDataURL={`https://covers.openlibrary.org/w/olid/${getIdFromKey(
                work.key
              )}-S.jpg`}
              alt={work.title}
              height={100}
              width={75}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutTheAuthor;
