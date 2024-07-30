import Image from "next/image";
import React from "react";
import H2 from "../shared/H2";

const About = () => {
  return (
    <section className="flex flex-col gap-10" id="About">
      <H2>About</H2>
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-10">
        {/* <Image
          src="/placeholder-aboutme-image.avif"
          width={200}
          height={200}
          alt="placeholder about me image"
          className="w-full object-cover md:w-[45%] lg:w-[42%] md:max-h-[400px]"
        /> */}

        <div className="flex flex-col md:w-[800px] gap-10 leading-loose tracking-wide">
          <p className="text-2xl lg:text-3xl">
            <span lang="vi" className="text-accent">
              Xin Chào!
            </span>{" "}
            My name is Jenna and I am a developer with a passion for all things
            craft.
          </p>
          <p className="text-lg">
            I have worked with non-profits and medium-sized businesses to
            deliver custom solutions, build websites on WordPress and Shopify,
            and craft web experiences using technologies like JavaScript,
            Next.js, React, and Tailwind.
          </p>
          <p className="text-lg">
            Currently, I’m focusing on enhancing my skills in cloud technologies
            to improve my ability to design, develop, and deploy cloud-based
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
