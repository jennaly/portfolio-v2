"use client";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const EmailButton = () => {
  const [showCopySuccessMsg, setShowCopySuccessMsg] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(EMAIL);
    setShowCopySuccessMsg(true);
    setTimeout(() => {
      setShowCopySuccessMsg(false);
    }, 3000);
  };

  return (
    <div className="flex items-center gap-4 w-fit relative">
      <button
        className="button__Email text-lg md:text-xl"
        onClick={copyEmailToClipboard}
      >
        {EMAIL}
        <IoCopyOutline size={20} />
      </button>
      {showCopySuccessMsg && (
        <span className="uppercase text-sm absolute -right-16 tracking-wide font-semibold">
          {COPY_SUCCESS_MSG}
        </span>
      )}
    </div>
  );
};

export default EmailButton;

const EMAIL = "jenna@wicot.io";
const COPY_SUCCESS_MSG = "copied!";
