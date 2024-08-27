import Overview from "@/app/components/Work/Overview";
import Paragraph from "@/app/components/Work/Paragraph";
import Title from "@/app/components/Work/Title";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10 flex flex-col gap-10">
      <Title>Syntri Cybersecurity Consulting Landing Page</Title>
      <Paragraph>
        A custom, fully responsive website tailored specifically for a
        cybersecurity consulting firm, built using React, Next.js, and
        TailwindCSS. The site features animated UI components and a mobile
        navigation menu to enhance user engagement and provide an intuitive
        browsing experience.
      </Paragraph>
      <Overview
        client={OverviewData.client}
        services={OverviewData.services}
        industry={OverviewData.industry}
        live={OverviewData.live}
        repo={OverviewData.repo}
      />
      <Image
        width={1439}
        height={1128}
        alt="Desktop and Mobile navigation menu on Syntri.us"
        src={"/syntri-nav.jpg"}
        className="w-full rounded-[30px]"
      />

      <Image
        width={1439}
        height={1128}
        alt="Testimonials Section on Desktop and Mobile view on Syntri.us"
        src={"/syntri-testimonials.jpg"}
        className="w-full rounded-[30px]"
      />

      <Image
        width={1439}
        height={1128}
        alt="Contact Form on Syntri.us"
        src={"/syntri-contactForm.jpg"}
        className="w-full rounded-[30px]"
      />
    </div>
  );
};

export default page;

const OverviewData = {
  client: "Syntri",
  services: ["Visual Design", "UI & UX Design", "Web Development"],
  industry: "IT and Cybersecurity",
  live: "https://syntri.us/",
  repo: "https://github.com/jennaly/syntri-landing",
};
