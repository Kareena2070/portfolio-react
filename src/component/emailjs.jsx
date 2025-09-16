import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_nqx83si",    // from EmailJS
        "template_vknc2fm",   // from EmailJS
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "kareenayadav24@navgurukul.org   ", // your email
        },
        "aBr6EMyGJK0-XXm7l" // Public Key
      )
      .then(() => alert("Message Sent!"))
      .catch((err) => alert("Error: " + err.text));
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required />
      <button type="submit">Send</button>
    </form>
  );
}