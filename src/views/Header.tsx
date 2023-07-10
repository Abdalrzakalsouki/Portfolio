import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import List from "../components/List";
import "../css/header.css";

function Header() {
  const [scrolling, setScrolling] = useState<Boolean>(false);
  const [isMobile, setIsMobile] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = window.scrollY;
      if (scrollDown > 0) setScrolling(true);
      else setScrolling(false);
    };
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`header ${scrolling ? "scroll" : ""}`}>
      <a href="#" aria-label="Logo">
        <Logo className="logo" />
      </a>
      <ul className="navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {isMobile && <List />}
    </div>
  );
}

export default Header;
