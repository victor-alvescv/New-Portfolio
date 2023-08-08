import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import ScrollIcon from "../assets/icons/SCROLLicon.svg";
import { AnimatedHeader } from "../components/AnimateHeader";
import Modal from "../components/Modal";
import Project from "../components/Project";
import projectsConfig from "../config/projectsConfig";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState({});
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(projectsConfig);
    return () => {};
  }, []);

  const handleModal = (project) => {
    setProject(project);
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <div className="container" id="projects">
        <div className="subcontainer projects">
          <div className="projects__text-container" data-aos="fade-up" data-aos-delay="300">
            <AnimatedHeader
              className={"projects__header"}
              headerText={"Projects"}
            />
          </div>
          <div className="projects__wrapper" data-aos="fade-up" data-aos-delay="300">
            {projects?.map((project, i) => {
              return (
                <Project
                  title={project.title}
                  image={project.coverImage}
                  onClick={() => {
                    handleModal(project);
                  }}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} closeHandler={handleModal} project={project} />
    </>
  );
}

export default Projects;
