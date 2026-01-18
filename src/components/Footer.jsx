import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <p>© 2026 Saurabh Kumar</p>
          <span>Built with React ⚛️</span>
        </div>

        {/* CENTER SOCIALS */}
        <div className="footer-socials">
          <a
            href="https://github.com/Saurabhkr4030"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/saurabh-kumar-87a9692b5/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=saurabhkr4030@gmail.com&su=Contact%20from%20Portfolio"
              title="Email via Gmail"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Saurabh <span>Kumar</span></h3>

          <button className="scroll-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}
