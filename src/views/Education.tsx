import { education } from "../json/education.json";
import EducationCard from "../components/EducationCard";
import "../css/education.css";
const Education = () => {
  return (
    <div className="education-co" id="education">
      <h2>Education</h2>
      <div className="edc-card-co">
        {education.map((course) => {
          return (
            <EducationCard
              title={course.title}
              GPA={course.GPA}
              certificate={course.certificate}
              list={course.list}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
