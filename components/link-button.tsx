import Link from "next/link";
import React from "react";

type TParams = {
  label: string;
  leadIcon?: React.ReactNode;
  href: string;
  className?: string;
};

const LinkButton = ({ label, href, leadIcon, className }: TParams) => {
  return (
    <Link
      href={href}
      className={`flex flex-row gap-3 items-center group hover:text-grey-text text-grey-text-light duration-300 w-fit ${className}`}
    >
      {leadIcon && leadIcon}
      {label}
    </Link>
  );
};

export default LinkButton;
