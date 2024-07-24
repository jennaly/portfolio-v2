import React from "react";
type H2Props = {
  children: React.ReactNode;
};

const H2 = ({ children }: H2Props) => {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{children}</h2>
  );
};

export default H2;
