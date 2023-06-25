import "../css/experience.css";
import { historyHistory } from "../json/experienceHistory.json";
import { experience } from "../json/experience.json";
import HistorySideList from "../components/HistorySideList";
import ExperienceCard from "../components/ExperienceCard";
import { useState, useEffect } from "react";

const Experience = () => {
  const [activeElement, setActiveElement] = useState<number>(0);
  function handleActive(index: number) {
    setActiveElement(index);
  }
  const job = experience[activeElement];
  return (
    <div className="experience-co">
      <h2>Experience</h2>
      <div className="experience-card">
        <HistorySideList
          titles={historyHistory}
          onActiveChange={handleActive}
          currentIndex={activeElement}
        />
        <ExperienceCard
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
