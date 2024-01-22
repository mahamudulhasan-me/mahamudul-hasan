"use client";
const SendMail = () => {
  const composeEmail = () => {
    const recipientEmail = "mahamudulhasan.org@gmail.com";
    const subject = "Hello from me";
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}`;
    window.open(gmailURL, "_blank");
  };
  return (
    <span
      className="hover:text-white transition-colors duration-150 cursor-pointer "
      onClick={composeEmail}
    >
      send email
    </span>
  );
};

export default SendMail;
