import Image from "next/image";
import React from "react";
import H2 from "../shared/H2";

const About = () => {
  return (
    <section className="flex flex-col gap-10">
      <H2>About Me</H2>
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-10">
        <Image
          src="/placeholder-aboutme-image.avif"
          width={200}
          height={200}
          alt="placeholder about me image"
          className="w-full object-cover md:w-[45%] lg:w-[42%]"
        />

        <div className="flex flex-col md:w-1/2 gap-10 leading-loose tracking-wide">
          <p className="text-3xl">
            <span lang="vi" className="text-accent">
              Xin Chào!
            </span>{" "}
            My name is Jenna and I'm a developer with a passion for all things
            craft. I am currently working as a remote freelancer.
          </p>
          <p className="text-lg">
            Currently based somewhere on earth, I've had the privilege of
            working with clients from around the world. This global perspective
            has enriched my design sensibilities and exposed me to diverse
            cultures and influences, which I incorporate into my work to create
            designs with a universal appeal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
