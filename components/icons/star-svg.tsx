import TSvgParams from "@/types/TSvgParams";

const StarSvg = ({
  fillClass = "fill-[#8A8A8A]",
  className = "",
}: TSvgParams) => {
  return (
    <svg width={14} height={14} className={`${className} ${fillClass}`}>
      <path d="m7 0 2.38 4.057L14 5.05l-3.15 3.501.476 4.671L7 11.33l-4.326 1.893.476-4.67L0 5.05l4.62-.993L7 0Z" />
    </svg>
  );
};
export default StarSvg;
