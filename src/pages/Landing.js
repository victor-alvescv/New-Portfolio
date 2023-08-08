import gitHubIcon from "../assets/icons/GHicon.svg";
import linkedinIcon from "../assets/icons/LNicon.svg";
import resumeIcon from "../assets/icons/RESUMEicon.svg";
import { AnimatedHeader } from "../components/AnimateHeader";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import Resume from '../assets/Resume.pdf'

const about = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "GitHub",
  "NPM",
  "Yarn",
  "ThreeJS",
  "Context",
  "React",
  "Redux",
  "State Management",
  "Vue",
  "AWS",
  "CSS frameworks",
  "Web Widgets",
  "Wordpress",
];

function randomSkill() {
  return about[Math.floor(Math.random() * about.length)];
}

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "inherit",
    fontSize: 1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);

    ref.current.material.color.lerp(
      color.set(hovered ? "#f70042" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          randomSkill(),
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function Landing() {
  return (
    <div id="landing" className="container" data-aos="fade-in" data-aos-once="true">
      <div className="landing__text-container">
        <AnimatedHeader headerText={"Hey,"} className={"landing__header"} />
        <AnimatedHeader
          headerText={"I'm Victor"}
          className={"landing__header"}
        />
        <AnimatedHeader
          headerText={"Junior Developer."}
          className={"landing__sub-header"}
        />
        <p className="landing__subtext">
          Frontend Developer / Frontend Software Engineer
        </p>
        <div className="landing__iconscontainer">
          <a target="_blank" rel="no-refferer" href="https://github.com/victor-alvescv">
            <img src={gitHubIcon} alt="gitHubIcon" />
          </a>
          <a target="_blank" rel="no-refferer" href="https://www.linkedin.com/in/victor-alves-68538527b/">
            <img src={linkedinIcon} alt="linkedinIcon" />
          </a>
          <a target="_blank" rel="no-refferer" href={Resume}>
            <img src={resumeIcon} alt="resumeIcon" />
          </a>
        </div>
        <a className="landing__button" href="#contact">
          Contact Me
        </a>
      </div>
      <div className="about__canvas">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 40], fov: 90 }}>
          <fog attach="fog" args={["#202025", 0, 80]} />
          <Cloud count={10} radius={20} />
          <OrbitControls autoRotate autoRotateSpeed={3} enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
