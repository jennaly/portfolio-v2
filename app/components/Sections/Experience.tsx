import React from "react";
import H2 from "../shared/H2";

type PositionType = {
  employer: string;
  role: string;
  startDate: string;
  endDate: string;
};

const Position = ({ employer, role, startDate, endDate }: PositionType) => {
  return (
    <div
      className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between py-10 border-b"
      id="Experience"
    >
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl">{employer}</span>
        <span className="pt-2">{role}</span>
      </div>
      <span className="">
        {startDate} &ndash; {endDate}
      </span>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="flex flex-col">
      <H2>Experience</H2>

      <div>
        {experiences.map((experience, index) => (
          <Position
            key={index}
            employer={experience.employer}
            role={experience.role}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;

const experiences = [
  {
    employer: "Children's Cancer Research Fund",
    role: "Front-end Developer",
    startDate: "2023",
    endDate: "Present",
  },
  {
    employer: "Independent Contractor",
    role: "Full-stack Developer and Web Consultant",
    startDate: "2022",
    endDate: "Present",
  },
];
