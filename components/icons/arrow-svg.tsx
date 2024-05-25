import TSvgParams from "@/types/TSvgParams";

const ArrowSvg = ({
  fillClass = "fill-grey-text-light",
  className = "",
}: TSvgParams) => {
  return (
    <svg width={13} height={7} className={`${className} ${fillClass}`}>
      <path d="M7.176 6.38a1 1 0 0 1-1.352 0l-4.79-4.393C.36 1.371.796.25 1.708.25h9.582c.912 0 1.348 1.12.676 1.737L7.176 6.38Z" />
    </svg>
  );
};
export default ArrowSvg;
