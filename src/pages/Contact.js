import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import LoadingIcon from "../assets/icons/LOADINGicon.svg";
import WorldTexture from "../assets/earthtexture.jpg";
import { AnimatedHeader } from "../components/AnimateHeader";
import Sphere3D from "../components/Shapes/Sphere3D";

function Contact({ setRotateSpeed }) {
  const [isSending, setIsSending] = useState(false);
  const [headerText, setHeaderText] = useState({
    text: "Get in touch!",
    modifier: "",
  });
  const form = useRef();

  useEffect(() => {
    init(process.env.REACT_APP_USER_ID);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setRotateSpeed(60);
    emailjs
      .sendForm(
        "gmail",
        "template_dyvlfqm",
        // process.env.REACT_APP_SERVICE_ID,
        // process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        // process.env.REACT_APP_USER_ID
        "user_UCVQB9AIUbJaobUtpSXnz"
      )
      .then(
        (res) => {
          console.log(res);
          setRotateSpeed(0.5);
          form.current.reset();
          setHeaderText({ text: "Message sent!", modifier: "-success" });
          setIsSending(false);
        },
        (err) => {
          console.log(err.text);
          setRotateSpeed(0.5);
          setIsSending(false);
          setHeaderText({ text: "Something went wrong", modifier: "-error" });
          alert(
            "My email service is temporarily unavailable. I’d still love to hear from you, so please email me directly at email@email.com"
          );
        }
      )
      .catch((e) => {
        console.log(e);
        setRotateSpeed(0.5);
        setIsSending(false);
        setHeaderText({ text: "Something went wrong", modifier: "-error" });
        alert(
          "My email service is temporarily unavailable. I’d still love to hear from you, so please email me directly at email@email.com"
        );
      });
  };

  return (
    <div className="contact container" id="contact">
      <div
        className="row contact__subcontainer"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="overflow-offset">
            <AnimatedHeader
              className={`contact__headertext-${headerText.modifier} contact__headertext`}
              headerText={headerText.text}
            />
          </div>
          <input type="text" placeholder="Name..." required name="user_name" />
          <input
            type="email"
            placeholder="Email..."
            required
            name="user_email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            style={{ resize: "none" }}
            placeholder="Your message..."
            required
          ></textarea>
          <button
            type="submit"
            className="contact__formbtn"
            style={{ pointerEvents: isSending ? "none" : "default" }}
          >
            {isSending ? (
              <span>
                <img
                  src={LoadingIcon}
                  alt="loading-spinner"
                  width="24px"
                  height="24px"
                  className="contact__loadingspinner"
                />
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
        <div className="contact__canvas" data-aos="fade-left" data-aos-once="true">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 25 }}>
            <Sphere3D texture={WorldTexture} position={[0, 0, 0]} />
            <OrbitControls autoRotate autoRotateSpeed={3} enableZoom={false} />
            <ambientLight intensity={10} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Contact;
