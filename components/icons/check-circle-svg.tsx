import TSvgParams from "@/types/TSvgParams";

const CheckCircleSvg = ({
  fillClass = "fill-grey-text-light",
  className = "",
}: TSvgParams) => {
  return (
    <svg width={16} height={16} className={`${className} ${fillClass}`}>
      <path d="M7.5.5A7.499 7.499 0 0 0 0 8c0 4.143 3.357 7.5 7.5 7.5S15 12.143 15 8 11.643.5 7.5.5ZM6.343 10.658c-.087.086-.21.158-.318.158-.108 0-.23-.076-.32-.162l-2.02-2.02.642-.641 1.702 1.702 4.5-4.533.63.653-4.816 4.843Z" />
    </svg>
  );
};
export default CheckCircleSvg;
