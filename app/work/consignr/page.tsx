import Overview from "@/app/components/Work/Overview";
import Paragraph from "@/app/components/Work/Paragraph";
import Title from "@/app/components/Work/Title";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10 flex flex-col gap-10">
      <Title>ConsignR In-Store Retail Shopping Kiosk</Title>
      <Paragraph>
        Developed custom UI interfaces for Consignr’s in-store kiosk system, a
        key feature of a cloud-based consignment inventory management platform
        that has processed over $30 million in sales. Led the front-end
        development of the product catalog, utilizing NextJS, React, and
        TailwindCSS to facilitate customer browsing and communication with store
        associates for product selection and try-ons.
      </Paragraph>
      <Overview
        client={OverviewData.client}
        services={OverviewData.services}
        industry={OverviewData.industry}
      />

      <Image
        width={1439}
        height={1128}
        alt="Preview of Consignr in-store kiosk"
        src={"/project-consignrWebKiosk.jpg"}
        className="w-full rounded-[30px]"
      />

      <Image
        width={1439}
        height={1128}
        alt="Preview of Consignr in-store kiosk"
        src={"/consignr-sizesSelected.jpg"}
        className="w-full rounded-[30px]"
      />

      <Image
        width={1439}
        height={1128}
        alt="Preview of Consignr in-store kiosk"
        src={"/consignr-requestConfirmation.jpg"}
        className="w-full rounded-[30px]"
      />

      <Image
        width={1439}
        height={1128}
        alt="Image of Consignr's in-store kiosk being used at a client store"
        src={"/consignr-customerImage.jpg"}
        className="w-full rounded-[30px]"
      />
    </div>
  );
};

export default page;

const OverviewData = {
  client: "Consignr",
  services: ["Web Development"],
  industry: "Retail & Consignment Software",
};
