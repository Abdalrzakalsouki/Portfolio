import "../css/educationCard.css";
import { v4 as uuidv4 } from "uuid";

interface EducationData {
  title: string;
  GPA: number | string;
  certificate: string;
  list: string[];
}

const EducationCard = (props: EducationData) => {
  const handleClick = () => {
    window.open("https://www.uniduna.hu", "_blank");
  };
  return (
    <div className="edc-card">
      <h3> {props.title} </h3>
      <h4>
        {props.certificate} | <span>{props.GPA}</span>
      </h4>
      {props.list.map((item) => {
        return <li key={uuidv4()}>{item}</li>;
      })}
      <button onClick={handleClick}>Visit Website</button>
    </div>
  );
};

export default EducationCard;
