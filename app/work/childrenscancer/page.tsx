import Overview from "@/app/components/Work/Overview";
import Paragraph from "@/app/components/Work/Paragraph";
import Title from "@/app/components/Work/Title";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10 flex flex-col gap-10">
      <Title>Children's Cancer Research Fund Website</Title>
      <Paragraph>
        A full website redesign for Children's Cancer Research Fund, a national
        nonprofit dedicated to raising funds for groundbreaking research in
        childhood cancer. The development work involves recreating the site
        using a modern tech stack—React, Next.js, and Tailwind CSS—aimed at
        significantly improving page load times, accessibility, overall site
        performance, and providing more control over the frontend logic and
        behavior. This transition away from WordPress to a custom stack allows
        for a more optimized, responsive, and secure website, reducing
        dependency on plugins and enhancing long-term maintainability.
      </Paragraph>
      <Overview
        client={OverviewData.client}
        services={OverviewData.services}
        industry={OverviewData.industry}
        repo={OverviewData.repo}
      />
      <Image
        width={1439}
        height={1128}
        alt="Dr.Dabber's site on both regular and mobile view"
        src={"/ccrf-homepage.jpg"}
        className="w-full rounded-[30px]"
      />

      <Image
        width={1439}
        height={1128}
        alt="Stories of impact on CCRF's website"
        src={"/ccrf-stories.jpg"}
        className="w-full rounded-[30px]"
      />

      <Paragraph>
        An integral part of this revamp is integrating Sanity.io, a headless
        CMS, to decouple the content management system from the frontend. This
        setup allows for marketing and creative staff greater flexibility and
        independence in being able to manage content without compromising site
        performance, page layout, or the integrity of semantic HTML elements.
      </Paragraph>
      <Image
        width={1439}
        height={1128}
        alt="Pop-up form on Dr.Dabber's homepage for Klaviyo integration"
        src={"/ccrf-cms.jpg"}
        className="w-full rounded-[30px]"
      />
    </div>
  );
};

export default page;

const OverviewData = {
  client: "Children's Cancer Research Fund",
  services: ["Visual Design", "UI & UX Design", "Web Development"],
  industry: "Nonprofit",
  repo: "https://github.com/jennaly/ccrf-revamp",
};
