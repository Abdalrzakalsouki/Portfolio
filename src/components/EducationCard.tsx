import "../css/educationCard.css";

interface EducationData {
  title: string;
  GPA: number | string;
  certificate: string;
  list: string[];
}

const EducationCard = (props: EducationData) => {
  return (
    <div className="edc-card">
      <h3> {props.title} </h3>
      <h4>
        {props.certificate} | <span>{props.GPA}</span>
      </h4>
      {props.list.map((item) => {
        return <li>{item}</li>;
      })}
      <button>Visit Website</button>
    </div>
  );
};

export default EducationCard;
