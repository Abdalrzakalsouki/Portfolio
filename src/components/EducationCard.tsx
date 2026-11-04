import React from "react";
import "../css/educationCard.css";
import { v4 as uuidv4 } from "uuid";

interface EducationData {
  title: string;
  GPA?: number | string;
  certificate: string;
  list: string[];
  url?: string;
}

const EducationCard = React.memo(
  ({ title, GPA, certificate, list, url }: EducationData) => {
    const handleClick = () => {
      if (url) window.open(url, "_blank");
    };
    return (
      <div className="edc-card">
        <h3> {title} </h3>
        <h4>
          {certificate}
          {GPA ? (
            <>
              {" | "}
              <span>{GPA}</span>
            </>
          ) : null}
        </h4>
        <ul>
          {list.map((item: string) => {
            return <li key={uuidv4()}>{item}</li>;
          })}
        </ul>
        {url && <button onClick={handleClick}>Visit Website</button>}
      </div>
    );
  }
);

export default EducationCard;
