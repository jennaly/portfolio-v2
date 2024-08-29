import React from "react";

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-xl tracking-wide w-full">{children}</p>;
};

export default Paragraph;
