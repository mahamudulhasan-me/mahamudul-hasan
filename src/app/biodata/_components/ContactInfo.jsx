"use client";
import { useState } from "react";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { VscCopy } from "react-icons/vsc";
import SectionContainer from "./SectionContainer";

const contactInfo = [
  {
    title: "Phone",
    value: "01710648088",
  },
  {
    title: "Email",
    value: "mahamudulhasan.org@gmail.com",
  },
];

const ContactInfo = () => {
  const [copiedItems, setCopiedItems] = useState({});
  const recipientEmail = "mahamudulhasan.org@gmail.com";
  const subject = "Hello from me";

  const copyToClipboard = (text, itemIndex) => {
    navigator.clipboard.writeText(text);
    setCopiedItems((prev) => ({ ...prev, [itemIndex]: true }));
    setTimeout(() => {
      setCopiedItems((prev) => ({ ...prev, [itemIndex]: false }));
    }, 2000);
  };

  const composeEmail = () => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}`;
    window.open(gmailURL, "_blank");
  };

  return (
    <SectionContainer title="যোগাযোগ">
      {contactInfo?.map((info, index) => (
        <h6
          key={index}
          className={`bio-element ${index % 2 !== 0 ? "bg-navy-light/20" : ""}`}
        >
          <span className="bio-label">{info.title}</span>
          <span className="bio-value gap-x-2">
            <span className="break-all">{info.value}</span>{" "}
            <span className="cursor-pointer">
              {copiedItems[index] ? (
                <BsClipboard2CheckFill color="#64ffda" title="Copied" />
              ) : (
                <VscCopy
                  title="Copy"
                  onClick={() =>
                    copyToClipboard(
                      info.title === "Phone" ? info.value : recipientEmail,
                      index
                    )
                  }
                />
              )}
            </span>
          </span>
        </h6>
      ))}
    </SectionContainer>
  );
};

export default ContactInfo;
