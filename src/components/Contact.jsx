import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_de16kdt",      // ✅ SERVICE ID
        "template_b4zlw36",     // ✅ TEMPLATE ID
        formRef.current,
        "_KlTnn5A8zPP4wPr0"     // ✅ PUBLIC KEY
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      {/* HEADER */}
      <div className="contact-header">
        <h2>
          Let's <span>Connect</span>
        </h2>
        <p>
          Whether you have a project idea or just want to say hello,
          I welcome your message and look forward to hearing from you.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="contact-container">

        {/* LEFT INFO CARD */}
        <div className="contact-info card">
          <h3>Get in Touch</h3>

          <div className="info-item">
            <span>📧</span>
            <div>
              <small>Email Me</small>
              <p>saurabhkr4030@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <small>Call Me</small>
              <p>(+91) 9065084030</p>
            </div>
          </div>

          <div className="info-item">
            <span>📍</span>
            <div>
              <small>Location</small>
              <p>Haridwar, Uttarakhand, India</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/saurabh-kumar-87a9692b5/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              in
            </a>

            <a
              href="https://github.com/Saurabhkr4030"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              &lt;/&gt;
            </a>

            <a href="tel:+919065084030" title="Call">
              📞
            </a>

            <a
              href="https://wa.me/919065084030"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              💬
            </a>

            <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=saurabhkr4030@gmail.com&su=Contact%20from%20Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            title="Email via Gmail"
            >
           📧
            </a>


          </div>
        </div>

        {/* RIGHT FORM (EMAILJS CONNECTED) */}
        <form
          ref={formRef}
          className="contact-form card"
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="I'm interested in..."
              required
            />
          </div>

          <button type="submit" className="btn submit-btn">
            Send Message
          </button>
        </form>

      </div>

      {/* CTA BOX */}
      <div className="contact-cta">
        <h3>
          Let's Turn <span>Ideas</span> into <span className="alt">Reality</span>
        </h3>
        <p>
          Ready to start your next project or looking to hire a dedicated
          full-stack developer?
        </p>

        <a
          href="https://wa.me/919065084030?text=Hi%20Saurabh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          🚀 Get in Touch Now
        </a>
      </div>

    </section>
  );
}
