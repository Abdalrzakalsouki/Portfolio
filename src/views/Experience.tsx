import "../css/experience.css";
import { historyHistory } from "../json/experienceHistory.json";
// import { experience } from "../json/experience.json";
import HistorySideList from "../components/HistorySideList";
// import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <div className="experience-co">
      <h2>Experience</h2>
      <div className="experience-card">
        <HistorySideList titles={historyHistory} />
      </div>
    </div>
  );
};
export default Experience;
