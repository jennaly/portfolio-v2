import React from "react";
import H2 from "../shared/H2";
import EmailButton from "../EmailButton";
import StyledLink from "../shared/StyledLink";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto p-10 flex flex-col gap-10 md:flex-row justify-between">
      <div className="flex flex-col gap-10 w-full md:w-[55%]">
        <H2>Let's work together</H2>
        <p className="text-xl tracking-wide">
          I am driven by new challenges and cutting-edge projects. If you're
          looking for a dedicated and passionate developer to bring your vision
          to life, let's connect. Get in touch to see how my experience and
          skills can benefit your organization!
        </p>
        <EmailButton />
      </div>

      <div className="w-full md:w-[30%] flex flex-col gap-5 md:gap-10">
        <span className="uppercase tracking-wide">Explore</span>
        <section className="flex gap-20">
          <div className="flex flex-col gap-2">
            {links.map((link, index) => (
              <StyledLink url={link.url} label={link.label} key={index} />
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {externalLinks.map((link, index) => (
              <StyledLink url={link.url} label={link.label} key={index} />
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  {
    url: "/#Work",
    label: "Work",
  },
  {
    url: "/#About",
    label: "About",
  },
  {
    url: "/#Experience",
    label: "Experience",
  },
];

const externalLinks = [
  {
    url: "www.linkedin.com/in/jennaly",
    label: "LinkedIn",
  },
  {
    url: "https://github.com/jennaly",
    label: "GitHub",
  },
  {
    url: "/",
    label: "Resume",
  },
];
