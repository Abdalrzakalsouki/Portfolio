import { education } from "../json/education.json";
import EducationCard from "../components/EducationCard";
import { v4 as uuidv4 } from "uuid";
import useAnimation from "../useAnimation";
import { useRef } from "react";
import "../css/education.css";

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useAnimation(sectionRef);
  return (
    <div className="education-co" id="education" ref={sectionRef}>
      <h2>Education</h2>
      <div className="edc-card-co">
        {education.map((course) => {
          return (
            <EducationCard
              key={uuidv4()}
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
