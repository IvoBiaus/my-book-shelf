import TSvgParams from "@/types/TSvgParams";

const ArrowLineSvg = ({
  fillClass = "fill-grey-text-light",
  strokeClass = "stroke-grey-text-light",
  className = "",
}: TSvgParams) => {
  return (
    <svg
      width={14}
      height={14}
      className={`${className} ${fillClass} ${strokeClass}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.25 7H.75m0 0 5.625 5.625M.75 7l5.625-5.625"
      />
    </svg>
  );
};
export default ArrowLineSvg;
