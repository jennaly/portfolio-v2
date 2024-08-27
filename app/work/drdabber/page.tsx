import Overview from "@/app/components/Work/Overview";
import Paragraph from "@/app/components/Work/Paragraph";
import Title from "@/app/components/Work/Title";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10 flex flex-col gap-10">
      <Title>Dr.Dabber E-Commerce Storefront</Title>
      <Paragraph>
        A site redesign for Dr.Dabber, a seven-figure, industry-disrupting
        company in the cannabis e-rigs sector. The redesign involves optimizing
        a fully customized Shopify theme written in Liquid.js, with a focus on
        giving Dr.Dabber's marketing team granular control over UI components
        for seamless content updates.
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
        alt="Dr.Dabber's site on both regular and mobile view"
        src={"/drdabber-homepage.jpg"}
        className="w-full rounded-[30px]"
      />

      <Image
        width={1439}
        height={1128}
        alt="Dr.Dabber's product page redesign"
        src={"/drdabber-productpageUI.jpg"}
        className="w-full rounded-[30px]"
      />

      <Paragraph>
        In addition to the redesign, I built a lead capture pop-up form to
        collect customer data, which is integrated with Klaviyo, an email
        marketing platform. The email addresses collected from the form are
        entered into an automated pipeline for targeted marketing campaigns,
        driving customer engagement and increasing sales.
      </Paragraph>
      <Image
        width={1439}
        height={1128}
        alt="Pop-up form on Dr.Dabber's homepage for Klaviyo integration"
        src={"/drdabber-klaviyo.jpg"}
        className="w-full rounded-[30px]"
      />
    </div>
  );
};

export default page;

const OverviewData = {
  client: "Dr.Dabber",
  services: ["Visual Design", "UI & UX Design", "Web Development"],
  industry: "Cannabis",
  live: "https://www.drdabber.com/",
  repo: "https://github.com/jennaly/drdabber-spring24-refresh",
};
