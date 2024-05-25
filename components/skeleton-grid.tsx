import Skeleton from "./skeleton";

type TParams = {
  itemsAmount?: number;
};

const SkeletonGrid = ({ itemsAmount = 24 }: TParams) => {
  return (
    <div className="flex gap-7 flex-wrap px-11 py-6">
      {Array(itemsAmount)
        .fill(0)
        .map((_, idx) => (
          <Skeleton key={idx} className="h-72 w-40" />
        ))}
    </div>
  );
};

export default SkeletonGrid;
