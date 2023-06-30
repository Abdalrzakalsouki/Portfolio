import "../css/projects.css";
import ShowCase from "../components/ShowCase";
import ShowCaseSub from "../components/ShowCaseSub";
import { mainProjects, sideProjects } from "../json/projects.json";
import { useState, useRef } from "react";
import useAnimation from "../useAnimation";
import { v4 as uuidv4 } from "uuid";
import image1 from "../assets/UTrack.png";
import image2 from "../assets/Speak.png";
import image3 from "../assets/Kasper.png";
import image4 from "../assets/ELzero Template.png";
import image5 from "../assets/Advice generator app.png";
import image6 from "../assets/Music Festival 2023.png";

function Projects() {
  const images = [image1, image2, image3, image4, image5, image6];
  const [moreProjects, setMoreProjects] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  useAnimation(divRef);
  const handleMoreProjects = () => {
    if (moreProjects) {
      divRef.current?.scrollIntoView();
      setMoreProjects(false);
    } else {
      setMoreProjects(true);
    }
  };
  return (
    <div className="container-pr" id="projects" ref={divRef}>
      <h2>Projects</h2>
      <div className="projects">
        {mainProjects.map((project, index) => {
          return (
            <ShowCase
              key={uuidv4()}
              ImgSrc={images[index]}
              title={project.title}
              descriptipon={project.description}
              tools={project.tools}
              url={project.url}
            />
          );
        })}

        {moreProjects &&
          sideProjects.map((subProject) => {
            return (
              <ShowCaseSub
                key={uuidv4()}
                title={subProject.title}
                description={subProject.description}
                url={subProject.url}
                tools={subProject.tools}
              />
            );
          })}
      </div>
      <button onClick={handleMoreProjects}>
        {moreProjects ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Projects;
