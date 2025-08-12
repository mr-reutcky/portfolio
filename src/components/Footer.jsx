import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__fade" aria-hidden="true"></div>

      <div className="footer__inner">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Samuel Reutcky
        </p>

        <div className="footer__social">
          <a
            href="https://github.com/mr-reutcky"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-reutcky"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/sam_r246"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="footer__glow" aria-hidden="true"></div>
    </footer>
  );
}
