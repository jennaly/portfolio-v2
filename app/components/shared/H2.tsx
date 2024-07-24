import React from "react";
type H2Props = {
  children: React.ReactNode;
};

const H2 = ({ children }: H2Props) => {
  return <h2 className="text-5xl">{children}</h2>;
};

export default H2;
