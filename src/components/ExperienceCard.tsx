import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/experienceCard.css";

interface ExperienceCardData {
  title: string;
  company: string;
  date: string;
  lists: string[];
}

const ExperienceCard = React.memo(
  ({ title, company, date, lists }: ExperienceCardData) => {
    return (
      <div className="experience-sub-card">
        <h3>
          {title}, <span>{company}</span>
        </h3>
        <p>{date}</p>
        <ul>
          {lists.map((item: string) => {
            return <li key={uuidv4()}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
);

export default ExperienceCard;
