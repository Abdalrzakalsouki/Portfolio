import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css/list.css";

function List() {
  const [showList, setShowList] = useState<Boolean>(false);
  const meunRef = useRef<HTMLDivElement | null>(null);

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
        aria-hidden="true"
        onClick={() => setShowList(!showList)}
      />
      <ul aria-hidden="true" className={showList ? "show" : "hide"}>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default List;
