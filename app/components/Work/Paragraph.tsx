import React from "react";

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-xl tracking-wide max-w-[900px]">{children}</p>;
};

export default Paragraph;
