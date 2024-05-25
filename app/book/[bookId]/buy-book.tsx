import Image from "next/image";
import ProviderA from "@/public/assets/provider-a.png";
import ProviderB from "@/public/assets/provider-b.png";

const BuyBook = () => {
  return (
    <div className="rounded-lg bg-white p-8 flex flex-col w-72 shrink-0 gap-7 h-fit">
      <h4 className="font-semibold text-xl">
        <span className="text-primary">Buy</span> this book Online
      </h4>
      <button className="flex gap-4 items-center">
        <Image
          src={ProviderA}
          alt="Buy with Provider A"
          height={30}
          width={30}
        />
        <span className="underline font-medium">Buy Now</span>
      </button>
      <button className="flex gap-4 items-center">
        <Image
          alt="Buy with Provider B"
          src={ProviderB}
          height={30}
          width={30}
        />
        <span className="underline font-medium">Buy Now</span>
      </button>
      <span className="font-semibold text-xs">
        When you buy books using these links the Internet Archive may earn a{" "}
        <span className="underline">small commission.</span>
      </span>
    </div>
  );
};

export default BuyBook;
