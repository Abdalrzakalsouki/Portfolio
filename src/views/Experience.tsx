import { historyHistory } from "../json/experienceHistory.json";
import { experience } from "../json/experience.json";
import HistorySideList from "../components/HistorySideList";
import ExperienceCard from "../components/ExperienceCard";
import { useState, useRef } from "react";
import useAnimation from "../useAnimation";
import { v4 as uuidv4 } from "uuid";
import "../css/experience.css";

const Experience = () => {
  const [activeElement, setActiveElement] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  useAnimation(sectionRef);
  function handleActive(index: number) {
    setActiveElement(index);
  }
  const job = experience[activeElement];
  return (
    <div className="experience-co" id="experience" ref={sectionRef}>
      <h2>Experience</h2>
      <div className="experience-card">
        <HistorySideList
          key={uuidv4()}
          titles={historyHistory}
          onActiveChange={handleActive}
          currentIndex={activeElement}
        />
        <ExperienceCard
          key={uuidv4()}
          title={job.title}
          company={job.company}
          date={job.date}
          lists={job.description}
        />
      </div>
    </div>
  );
};
export default Experience;
