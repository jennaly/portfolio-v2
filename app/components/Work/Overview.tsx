import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

type OverviewProps = {
  client: string;
  services: string[];
  industry: string;
  live?: string;
  repo?: string;
};

const Overview = ({
  client,
  services,
  industry,
  live,
  repo,
}: OverviewProps) => {
  return (
    <section className="text-xl tracking-wide grid grid-cols-1 gap-4 md:justify-between md:flex md:w-[90%] lg:w-[80%] xl:w-[70%]">
      <div className="grid grid-cols-2 md:flex md:flex-col">
        <h3 className="w-1/2">Client</h3>
        <span className="text-[#808080]">{client}</span>
      </div>

      <div className="grid grid-cols-2 md:flex md:flex-col">
        <h3 className="w-1/2">Industry</h3>
        <span className="text-[#808080]">{industry}</span>
      </div>

      <div className="grid grid-cols-2 md:flex md:flex-col">
        <h3 className="w-1/2">Services</h3>
        <div>
          {services.map((service, index) => (
            <span className="block text-[#808080]" key={index}>
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex md:flex-col">
        <div>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="block project__Links"
            >
              Live Site <MdArrowOutward className="inline" />
            </a>
          )}
        </div>

        <div>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="block project__Links"
            >
              Code <MdArrowOutward className="inline" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Overview;
