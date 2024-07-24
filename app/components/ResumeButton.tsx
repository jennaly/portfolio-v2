import Link from "next/link";
import React from "react";

type ResumeButtonProps = {
  children: React.ReactNode;
};

const ResumeButton = ({ children }: ResumeButtonProps) => {
  return (
    <Link href="/" className="resume_button">
      {children}
    </Link>
  );
};

export default ResumeButton;
