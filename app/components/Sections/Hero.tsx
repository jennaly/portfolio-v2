import React from "react";
import EmailButton from "../EmailButton";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="flex flex-col mx-auto items-center text-center justify-between gap-5">
      <div className={`${DMSans.className} text-5xl lg:text-6xl xl:text-7xl`}>
        <h1>Jenna Ly</h1>
        <span className="text-accent">Web Developer</span>
      </div>

      <p className="text-lg max-w-[500px]">
        When I'm not coding, you'll find me at Trader Joe's getting things my
        freezer absolutely does not have space for.
      </p>

      <EmailButton />
    </div>
  );
};

export default Hero;
