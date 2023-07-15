import React from "react";
import "../css/educationCard.css";
import { v4 as uuidv4 } from "uuid";

interface EducationData {
  title: string;
  GPA: number | string;
  certificate: string;
  list: string[];
}

const EducationCard = React.memo(
  ({ title, GPA, certificate, list }: EducationData) => {
    const handleClick = () => {
      window.open("https://www.uniduna.hu", "_blank");
    };
    return (
      <div className="edc-card">
        <h3> {title} </h3>
        <h4>
          {certificate} | <span>{GPA}</span>
        </h4>
        <ul>
          {list.map((item: string) => {
            return <li key={uuidv4()}>{item}</li>;
          })}
        </ul>
        <button onClick={handleClick}>Visit Website</button>
      </div>
    );
  }
);

export default EducationCard;
