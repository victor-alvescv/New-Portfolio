import React from "react";
import Me from "../assets/me2.jpg";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { experienceConfig } from "../config/resume/experienceConfig";
import { technicalSkillsConfig } from "../config/resume/technicalSkillsConfig";
import { transferrableSkillsConfig } from "../config/resume/transferrableSkillsConfig";
import { AnimatedHeader } from "../components/AnimateHeader";
import ResumeFinal from '../assets/Resume.pdf'
import Certificate from '../assets/Certificate.pdf'

const Resume = () => {
  return (
    <div id="resume" className="container">
      <div
        className="projects__text-container"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <AnimatedHeader className={"projects__header"} headerText={"Resume"} />
      </div>
      <div className="resume__wrapper">
        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__image">
            <img src={Me} alt="" />
          </div>
          <div>
            <div className="resume__name playfair">Victor Alves</div>
            <div className="resume__title lato">Software Engineer</div>
            <div className="resume__contact--info">
              <div>
                <FaDownload />
                <a className="resume__link" href={ResumeFinal} download>
                  Download resume
                </a>
              </div>
              <div>
                <MdEmail />
                <a className="resume__link" href="mailto:me@victoralves.lat">
                  Email
                </a>
              </div>
              <div>
                <AiFillLinkedin />
                <a
                  className="resume__link"
                  href="https://www.linkedin.com/in/victor-alves-68538527b/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div>
              A highly motivated software engineer prepared to utilise
              exceptional software, problem-solving and communication skills to
              further my programming passion as a website developer.
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Education</div>
          <div>
            <div className="resume__education--wrapper">
              <div className="resume__education">
                <div className="resume__job--name">
                  Frontend Developer Bootcamp <a href={Certificate} target="_blank" className="certificate__text"> Certificate</a>
                </div>
                <div>
                  Finished 100% of one of the most prestigious courses of frontend in the world.
                </div>
              </div>
              <div className="resume__job--date">2021 - 2022</div>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Experience</div>
          <div>
            {experienceConfig.map((experience, index) => (
              <div className="resume__job--wrapper" key={index}>
                <div className="resume__job">
                  <div>
                    <div className="resume__job--name">{experience.name}</div>
                    <div className="resume__job--description">
                      {experience.title}
                    </div>
                  </div>
                  <div className="resume__job--date">{experience.date}</div>
                </div>

                <ul className="resume__list-wrapper">
                  {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Technical Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {technicalSkillsConfig.map((technicalSkills, index) => (
                  <li key={index}>{technicalSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Transferrable Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {transferrableSkillsConfig.map((transferrableSkills, index) => (
                  <li key={index}>{transferrableSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="resume__grid resume__bottom" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">References</div>
          <div>Available Upon request</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
