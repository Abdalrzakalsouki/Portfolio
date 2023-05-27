import "../css/skills.css";
import Card from "./Card";
import {
  faReact,
  faJs,
  faBootstrap,
  faHtml5,
  faCss3,
  faSass,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const data = [
    { icon: faT, title: "TypeScript", text: "Check types" },
    { icon: faReact, title: "React", text: "Reuse" },
    { icon: faJs, title: "JavaScript", text: "Logic" },
    { icon: faBootstrap, title: "BootStrap", text: "Style faster" },
    { icon: faSass, title: "SCSS", text: "Advanc style" },
    { icon: faCss3, title: "CSS", text: "Style" },
    { icon: faHtml5, title: "HTML", text: "Strcture" },
    { icon: faGithub, title: "Github", text: "Host" },
    { icon: faGit, title: "Git", text: "Push" },
  ];
  return (
    <div className="conatiner-sk">
      <h2>Skills</h2>
      <div className="container-ca">
        {data.map((cardData) => {
          return (
            <Card
              icon={cardData.icon}
              title={cardData.title}
              text={cardData.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
