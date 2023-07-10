import "../css/landing.css";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import useAnimation from "../useAnimation";
function Landing() {
  const [isOn, setIsOn] = useState<Boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useAnimation(sectionRef);
  const handleIsOn = () => {
    setIsOn(true);
    setTimeout(() => {
      setIsOn(false);
    }, 8000);
  };
  const handleContactNavgation = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView();
  };
  return (
    <div ref={sectionRef}>
      <div className="conatiner-la">
        <button onClick={handleIsOn} aria-label="search">
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
        <h5>Hi, I am</h5>
        <h1>Abdulrazzak Alsssouki</h1>
        <h2>Frontend developer</h2>
        <div
          className={`animation-style square-1 ${isOn ? "animation" : ""}`}
        ></div>
        <div
          className={`animation-style square-2 ${isOn ? "animation" : ""}`}
        ></div>
      </div>
      <div className="container-btn">
        <button onClick={handleContactNavgation}>Contact me</button>
      </div>
    </div>
  );
}

export default Landing;
