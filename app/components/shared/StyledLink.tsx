import Link from "next/link";
import React from "react";

type LinkProps = {
  url: string;
  label: string;
};

const StyledLink = ({ url, label }: LinkProps) => {
  return (
    <Link href={url} className="link__style text-xl tracking-wide">
      {label}
    </Link>
  );
};

export default StyledLink;
