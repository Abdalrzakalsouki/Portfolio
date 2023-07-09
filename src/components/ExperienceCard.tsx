import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/experienceCard.css";

interface ExperienceCardData {
  title: string;
  company: string;
  date: string;
  lists: string[];
}

const ExperienceCard = React.memo((props: ExperienceCardData) => {
  return (
    <div className="experience-sub-card">
      <h3>
        {props.title}, <span>{props.company}</span>
      </h3>
      <p>{props.date}</p>
      <ul>
        {props.lists.map((item) => {
          return <li key={uuidv4()}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default ExperienceCard;
