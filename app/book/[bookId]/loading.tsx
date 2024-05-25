import Skeleton from "@/components/skeleton";

const LoadingBookDetail = () => {
  return (
    <div className="flex flex-col px-5 md:px-11 py-5 md:py-6 overflow-y-auto overflow-x-hidden">
      <div className="flex gap-8 md:gap-16 mb-10 flex-wrap">
        <Skeleton className="h-96 flex-1 min-w-0" />
        <Skeleton className="h-96 flex-1 min-w-0" />
        <Skeleton className="h-96 flex-1 min-w-0" />
      </div>
      <div className="flex gap-8 md:gap-16 md:flex-row flex-col-reverse">
        <Skeleton className="size-56" />
        <Skeleton className="w-full h-32" />
      </div>
    </div>
  );
};

export default LoadingBookDetail;
