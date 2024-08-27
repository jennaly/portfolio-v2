import React from "react";

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="text-xl tracking-wide w-full text-justify">{children}</p>
  );
};

export default Paragraph;
