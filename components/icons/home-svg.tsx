import TSvgParams from "@/types/TSvgParams";

const HomeSvg = ({
  fillClass = "fill-[#8A8A8A]",
  className = "",
}: TSvgParams) => {
  return (
    <svg width={19} height={19} className={`${className} ${fillClass}`}>
      <path
        fillRule="evenodd"
        d="M8.687.637a1.15 1.15 0 0 1 1.626 0l8.05 8.05a1.15 1.15 0 0 1-.813 1.963H16.4v6.9a1.15 1.15 0 0 1-1.15 1.15h-2.3a1.15 1.15 0 0 1-1.15-1.15V14.1a1.15 1.15 0 0 0-1.15-1.15h-2.3A1.15 1.15 0 0 0 7.2 14.1v3.45a1.15 1.15 0 0 1-1.15 1.15h-2.3a1.15 1.15 0 0 1-1.15-1.15v-6.9H1.45a1.15 1.15 0 0 1-.813-1.963l8.05-8.05Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HomeSvg;
