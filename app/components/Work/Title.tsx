import React from "react";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({ subsets: ["latin"] });

type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1
      className={`${DMSans.className} text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight md:max-w-[600px] lg:max-w-[700px] text-accent`}
    >
      {children}
    </h1>
  );
};

export default Title;
