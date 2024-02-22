"use client";
import { useState } from "react";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { RxArrowTopRight } from "react-icons/rx";
import { TbMail } from "react-icons/tb";
import { VscCopy } from "react-icons/vsc";

const Email = () => {
  const [copied, setCopied] = useState(false);
  const recipientEmail = "mahamudulhasan.org@gmail.com";
  const subject = "Hello from me";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 10000); // Reset copied state after 2 seconds
  };

  const composeEmail = () => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}`;
    window.open(gmailURL, "_blank");
  };
  return (
    <aside className="flex items-start gap-2">
      <p className="text-slate-300 text-2xl">
        <TbMail />
      </p>

      <p
        onClick={composeEmail}
        className="text-slate-300 flex items-center gap-1 group"
      >
        <span className="hovered-text2">mahamudulhasan.org@gmail.com</span>{" "}
        <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
          <RxArrowTopRight />
        </span>
      </p>
      <p className="text-xl text-slate-300 cursor-pointer">
        {copied ? (
          <BsClipboard2CheckFill color="#64ffda" title="Copied" />
        ) : (
          <VscCopy
            title="Copy"
            onClick={() => copyToClipboard("mahamudulhasan.org@gmail.com")}
          />
        )}
      </p>
    </aside>
  );
};

export default Email;
