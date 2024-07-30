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
};

const Project = ({ image, title, url }: ProjectType) => {
  return (
    <Link href={url}>
      <div className="project__Container">
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
          <h3>{title}</h3>
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
      url: "/placeholder.avif",
      width: 1313,
      height: 985,
      alt: "placeholder alt",
    },
    title: "Children's Cancer Research Fund Website",
    url: "",
  },
  {
    image: {
      url: "/placeholder.avif",
      width: 1313,
      height: 985,
      alt: "placeholder alt",
    },
    title: "ConsignR Web Kiosk ",
    url: "",
  },
  {
    image: {
      url: "/placeholder.avif",
      width: 1313,
      height: 985,
      alt: "placeholder alt",
    },
    title: "Dr.Dabber Website",
    url: "",
  },
  {
    image: {
      url: "/placeholder.avif",
      width: 1313,
      height: 985,
      alt: "placeholder alt",
    },
    title: "Syntri Website",
    url: "",
  },
];
