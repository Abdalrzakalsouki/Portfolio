import "../css/projects.css";
import ShowCase from "../components/ShowCase";
import { mainProjects, sideProjects } from "../json/projects.json";
import image1 from "../assets/UTrack.png";
import image2 from "../assets/Speak.png";
import image3 from "../assets/Kasper.png";
import image4 from "../assets/ELzero Template.png";
import image5 from "../assets/Advice generator app.png";
import image6 from "../assets/Music Festival 2023.png";

function Projects() {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <div className="container-pr">
      <h2>Projects</h2>
      <div className="projects">
        {mainProjects.map((project, index) => {
          return (
            <ShowCase
              ImgSrc={images[index]}
              title={project.title}
              descriptipon={project.description}
              tools={project.tools}
              url={project.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
