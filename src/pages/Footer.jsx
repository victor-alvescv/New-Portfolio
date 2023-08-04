import React from "react";
import FooterLogo from "../assets/favicon.png";
import { MdOutlineArrowUpward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a target="_blank" href="https://github.com/victor-alvescv">Github</a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/victor-alves-68538527b/">LinkedIn</a>
        </div>
        <div>
          <a target="_blank" href="mailto:me@victoralves.lat">Email</a>
        </div>
        <div>
          <a target="_blank" href="https://victorralves.lat/assets/Resume.pdf">Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2022 Victor Alves</div>
    </div>
  );
};

export default Footer;
