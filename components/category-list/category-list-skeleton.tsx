import Skeleton from "../skeleton";

const CategoryListSkeleton = () => {
  return (
    <div className="flex gap-5">
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <Skeleton className="h-28 w-20" key={idx} />
        ))}
    </div>
  );
};

export default CategoryListSkeleton;
