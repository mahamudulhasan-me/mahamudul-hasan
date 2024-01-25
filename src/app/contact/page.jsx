"use client";
import ContactsNav from "@/components/CollapseMenu/ContactsNav/ContactsNav";
import SectionHead from "@/components/SectionHead/SectionHead";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { FaHandPeace } from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    if (email && message) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_nli385v",
          "template_3h2bc0f",
          form.current,
          "zlcygz2kBru-sUdFt"
        )
        .then((response) => {
          if (response.status === 200) {
            setSuccess(true);
          }
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };
  return (
    <div className=" flex h-full">
      <nav className="w-[19%] h-full border-r border-p4">
        <ContactsNav bt={false} />
      </nav>
      <aside className="w-[40%] h-full border-r border-p4">
        <SectionHead>contact</SectionHead>
        <div className="w-full h-full flex justify-center items-center text-s1">
          {success ? (
            <div className="text-center" data-aos="zoom-out">
              <h2 className="text-3xl text-white flex justify-center items-center">
                Thank You! <FaHandPeace color="#F9BF2F" />
              </h2>
              <p>
                Your message has been accepted. <br /> You will receive answer
                really soon!
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-4 py-3 px-6 rounded-lg text-white bg-[#1C2B3A] hover:bg-[#263B50] transition-all"
              >
                send-new-message
              </button>
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form space-y-6"
            >
              <div>
                <label htmlFor="name">_name</label>
                <br />
                <input
                  type="text"
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="name">_email</label>
                <br />
                <input
                  type="email"
                  name="user_email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="name">_message</label>
                <br />
                <textarea
                  name="message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="md:w-[23rem] w-[20rem] h-36 bg-p3 rounded-lg px-3 py-4 outline-none border border-p4 mt-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" py-3 px-6 rounded-lg text-white bg-[#1C2B3A] hover:bg-[#263B50] transition-all"
              >
                submit-message
              </button>
            </form>
          )}
        </div>
      </aside>
      <aside className="w-[40%] h-full border-r border-p4">
        <SectionHead></SectionHead>
      </aside>
    </div>
  );
};

export default ContactPage;
