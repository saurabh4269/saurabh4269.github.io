"use client";

import { useState } from 'react';
import MailIcon from "@/assets/icons/mail";
import { mail } from "@/constants/strings";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card";
import LinksGridCard from "../cards/links/links-grid";
import TextInput from "./text-input";

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/your-formspree-endpoint', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Thanks for your submission!");
        form.reset();
      } else {
        setStatus("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className={cardStyle + " gap-7"}>
        <CardTitle title="CONTACT" icon={<MailIcon />} />
        <p className="text-md pb-1">
          <span className="opacity-70">
            Contact me by filling out the form below, or by sending to{" "}
          </span>
          <a
            className="hover:underline font-medium opacity-70 dark:!opacity-80"
            href={"mailto:" + mail}
          >
            {mail}
          </a>
        </p>
        <TextInput
          required
          id="name"
          type="text"
          label="Name"
          placeholder="Enter your name"
        />
        <TextInput
          required
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email address"
        />
        <TextInput
          required
          isTextArea
          id="message"
          type="text"
          minLength={5}
          maxLength={10000}
          rows={3}
          label="Message"
          placeholder="Write your message here..."
        />
        <div className="w-full flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
        </div>
        {status && <p>{status}</p>}
      </form>
      <div className="py-3" />
      <LinksGridCard />
    </div>
  );
}
