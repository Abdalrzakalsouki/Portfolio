import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css/list.css";

function List() {
  const [showList, setShowList] = useState<Boolean>(false);
  const meunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      let menu = meunRef.current;
      if (menu !== null && !menu.contains(e.target as Node)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={meunRef} className="toggleBtn">
      <FontAwesomeIcon
        icon={faBars}
        className="icon"
        onClick={() => setShowList(!showList)}
      />
      <ul
        onClick={() => setShowList(false)}
        className={showList ? "show" : "hide"}
      >
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
    </div>
  );
}

export default List;
