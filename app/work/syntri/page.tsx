import Overview from "@/app/components/Work/Overview";
import Paragraph from "@/app/components/Work/Paragraph";
import Title from "@/app/components/Work/Title";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10 flex flex-col gap-10">
      <Title>Syntri Cybersecurity Consulting Landing Page</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Overview
        client={OverviewData.client}
        services={OverviewData.services}
        industry={OverviewData.industry}
        live={OverviewData.live}
        repo={OverviewData.repo}
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
