import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import List from "../components/List";
import "../css/header.css";

function Header() {
  const [scrolling, setScrolling] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = window.pageYOffset;
      if (scrollDown > 0) setScrolling(true);
      else setScrolling(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <List />
    </div>
  );
}

export default Header;
