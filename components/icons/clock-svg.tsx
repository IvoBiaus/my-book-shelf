import TSvgParams from "@/types/TSvgParams";

const ClockSvg = ({
  fillClass = "fill-grey-text-light",
  className = "",
}: TSvgParams) => {
  return (
    <svg width={19} height={19} className={`${className} ${fillClass}`}>
      <path d="M9.59 17.69c-4.516 0-8.19-3.674-8.19-8.19s3.674-8.19 8.19-8.19c4.517 0 8.19 3.674 8.19 8.19s-3.674 8.19-8.19 8.19Zm0-15.07A6.887 6.887 0 0 0 2.711 9.5a6.887 6.887 0 0 0 6.88 6.88A6.887 6.887 0 0 0 16.47 9.5a6.887 6.887 0 0 0-6.88-6.88Zm-.052 7.483H5.332a.655.655 0 1 1 0-1.31h3.55V3.93a.655.655 0 1 1 1.311 0v5.517a.655.655 0 0 1-.655.655Z" />{" "}
    </svg>
  );
};
export default ClockSvg;
