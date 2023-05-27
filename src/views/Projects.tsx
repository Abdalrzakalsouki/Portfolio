import "../css/projects.css";
import ShowCase from "./ShowCase";
import Image1 from "../assets/project1.png";
function Projects() {
  //!This is just a mockup data (use JSON data for real building)
  const projects = [
    {
      url: Image1,
      title: "Music Wesbite, Own design",
      description: "Template using: HTML5, CSS3, and JS",
    },
    {
      url: Image1,
      title: "Music Wesbite, Own design",
      description: "Template using: HTML5, CSS3, and JS",
    },
    {
      url: Image1,
      title: "Music Wesbite, Own design",
      description: "Template using: HTML5, CSS3, and JS",
    },
    {
      url: Image1,
      title: "Music Wesbite, Own design",
      description: "Template using: HTML5, CSS3, and JS",
    },
  ];
  return (
    <div className="container-pr">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((data) => {
          return (
            <ShowCase
              ImgSrc={data.url}
              title={data.title}
              descriptipon={data.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
