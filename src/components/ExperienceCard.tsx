import "../css/experienceCard.css";

interface ExperienceCardData {
  title: string;
  company: string;
  date: string;
  lists: string[];
}

const ExperienceCard = (props: ExperienceCardData) => {
  return (
    <div className="experience-sub-card">
      <h4>
        {props.title}, <span>{props.company}</span>
      </h4>
      <p>{props.date}</p>
      <ul>
        {props.lists.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
