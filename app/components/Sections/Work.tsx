import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import H2 from "../shared/H2";

type ProjectType = {
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  title: string;
  url: string;
  wip: boolean;
};

const Project = ({ image, title, url, wip }: ProjectType) => {
  return (
    <Link href={url}>
      <div className="project__Container">
        {wip && (
          <div className="absolute uppercase bg-black bg-opacity-50 px-4 py-2 top-4 right-6 text-sm font-medium rounded-full">
            work in progress
          </div>
        )}
        <div className="projectImg__Container">
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="projectImg"
          />
        </div>
        <div className="project__Text">
          <h3 className="text-xl">{title}</h3>
          <MdArrowOutward />
        </div>
      </div>
    </Link>
  );
};

const Work = () => {
  return (
    <section className="flex flex-col gap-10" id="Work">
      <H2>Recent Work</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <Project
            image={project.image}
            title={project.title}
            url={project.url}
            key={index}
            wip={project.wip}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;

const projects = [
  {
    image: {
      url: "/project-ccrf.jpg",
      width: 1313,
      height: 985,
      alt: "Project Preview",
    },
    title: "Children's Cancer Research Fund Website",
    url: "/work/childrenscancer",
    wip: true,
  },
  {
    image: {
      url: "/project-consignrWebKiosk.jpg",
      width: 1836,
      height: 1439,
      alt: "Project Preview",
    },
    title: "ConsignR In-Store Retail Shopping Kiosk",
    url: "/work/consignr",
    wip: false,
  },
  {
    image: {
      url: "/project-drdabber.jpg",
      width: 1836,
      height: 1439,
      alt: "Project Preview",
    },
    title: "Dr.Dabber E-Commerce Storefront",
    url: "/work/drdabber",
    wip: false,
  },
  {
    image: {
      url: "/project-syntri.jpg",
      width: 1836,
      height: 1439,
      alt: "Project Preview",
    },
    title: "Syntri Cybersecurity Consulting Landing Page",
    url: "/work/syntri",
    wip: false,
  },
];
