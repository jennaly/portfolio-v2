import React from "react";
import EmailButton from "../EmailButton";
import { DM_Sans, Signika_Negative } from "next/font/google";

const DMSans = DM_Sans({ subsets: ["latin"] });
const SigNegative = Signika_Negative({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="flex flex-col mx-auto items-center text-center justify-between gap-5">
      <div className="text-5xl lg:text-6xl xl:text-7xl">
        <h1 className={`${DMSans.className}`}>Jenna Ly</h1>
        <span
          className={`${SigNegative.className} text-accent text-4xl uppercase font-semibold`}
        >
          full-stack development
        </span>
      </div>

      <p className="text-xl tracking-wide max-w-[600px]">
        When I'm not coding, you'll find me at Trader Joe's getting things my
        freezer absolutely does not have space for.
      </p>

      <EmailButton />
    </div>
  );
};

export default Hero;
