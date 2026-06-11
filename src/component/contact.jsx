import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_nqx83si", // from EmailJS
        "template_vknc2fm", // from EmailJS
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "kareenayadav24@navgurukul.org", // your email
        },
        "aBr6EMyGJK0-XXm7l", // Public Key
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" }); // clear fields
        setStatus("✅ Message sent successfully!");
      })
      .catch(() => {
        setStatus("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <section
      className="container my-5 justify-content-center"
      id="contact"
      data-aos="fade-up"
    >
      <h1 className="text-center mb-4">Let's Build Something Great Together</h1>
      <div className="row justify-content-center">
        <div className="col-md-5 mb-4 px-5">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4>Let's Connect</h4>
              <p>
                Open to frontend developer opportunities, internships, freelance
                projects, and collaborations.
              </p>
              <div className="mb-3 ">
                <i className="bi bi-envelope me-3"></i>
                Kareenayadav1088@gmail.com
              </div>
              <div className="mb-3">
                <i className="bi bi-telephone me-3"></i>
                7428283503
              </div>
              <div className="mb-3">
                <i className="bi bi-geo-alt me-3"></i>
                Delhi, India
              </div>

              <div className="pt-5 text-center">
                <a
                  href="https://www.linkedin.com/in/kareena-yadav/"
                  className="bi bi-linkedin me-4 fs-1 text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>

                <a
                  href="https://github.com/Kareena2070"
                  className="bi bi-github me-4 fs-1 text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>

                <a
                  href="mailto:kareenayadav1088@gmail.com"
                  className="bi bi-envelope-fill me-4 fs-1 text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>

                <a
                  href="https://wa.me/917428283503?text=Hi%20Kareena,%20I%20saw%20your%20portfolio."
                  className="bi bi-whatsapp fs-1 text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 mb-4 px-5">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <form action="get" onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark">
                  Send Message
                </button>
                {status && <p className="mt-3 text-success">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
