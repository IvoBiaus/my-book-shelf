import TSvgParams from "@/types/TSvgParams";

const LocationSvg = ({
  fillClass = "fill-grey-text-light",
  className = "",
}: TSvgParams) => {
  return (
    <svg width={14} height={18} className={`${className} ${fillClass}`}>
      <path
        fillRule="evenodd"
        d="m6.69 17.433.003.001c.197.086.307.066.307.066s.11.02.308-.066l.002-.001.006-.003.018-.008a5.834 5.834 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C12.302 13.488 14 10.993 14 7.5a7 7 0 1 0-14 0c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM7 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationSvg;
