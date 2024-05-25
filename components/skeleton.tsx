type TParams = {
  className?: string;
};

const Skeleton = ({ className = "" }: TParams) => {
  return <div className={`rounded bg-slate-300 animate-pulse ${className}`} />;
};

export default Skeleton;
