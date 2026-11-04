import "../css/skills.css";
import Card from "../components/Card";
import { v4 as uuidv4 } from "uuid";
import useAnimation from "../useAnimation";
import { useRef } from "react";
import {
  faReact,
  faJs,
  faBootstrap,
  faHtml5,
  faCss3,
  faSass,
  faGit,
  faGithub,
  faNodeJs,
  faFigma,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faT,
  faDatabase,
  faCodeBranch,
  faCode,
  faMobileScreen,
  faUniversalAccess,
  faVial,
  faLayerGroup,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  { icon: faReact, title: "React", text: "Reusable UIs" },
  { icon: faMobileScreen, title: "React Native & Expo", text: "iOS and Android apps" },
  { icon: faLayerGroup, title: "Next.js", text: "Web apps and dashboards" },
  { icon: faT, title: "TypeScript", text: "Check types" },
  { icon: faJs, title: "JavaScript", text: "Logic" },
  { icon: faBoxesStacked, title: "State management", text: "Redux, Zustand, TanStack Query" },
  { icon: faNodeJs, title: "Node.js", text: "Express and Socket.IO" },
  { icon: faDatabase, title: "Supabase", text: "Postgres, Auth, RLS" },
  { icon: faUniversalAccess, title: "Accessibility", text: "WCAG 2.1, screen readers" },
  { icon: faVial, title: "Testing", text: "Jest, Playwright, Maestro" },
  { icon: faFigma, title: "Figma", text: "Design to code" },
  { icon: faDocker, title: "Docker & CI/CD", text: "GitHub Actions, Gitea" },
  { icon: faSass, title: "SCSS", text: "Advanced style" },
  { icon: faCss3, title: "CSS", text: "Style" },
  { icon: faHtml5, title: "HTML", text: "Structure" },
  { icon: faBootstrap, title: "Bootstrap", text: "Style faster" },
  { icon: faGithub, title: "GitHub", text: "Host and review" },
  { icon: faGit, title: "Git", text: "Version control" },
  { icon: faCode, title: "REST APIs", text: "Connection" },
  { icon: faCodeBranch, title: "Algorithms & data structures", text: "Planning" },
];

function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useAnimation(sectionRef);
  return (
    <div className="conatiner-sk" id="skills" ref={sectionRef}>
      <h2>Skills</h2>
      <div className="container-ca">
        {data.map((cardData) => {
          return (
            <Card
              key={uuidv4()}
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
