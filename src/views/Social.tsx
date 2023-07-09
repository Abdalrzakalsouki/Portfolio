import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/social.css";

const Social = () => {
  return (
    <div className="social-co">
      <div>
        <a
          href="https://github.com/Abdalrzakalsouki"
          target="_blank"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/abdulrazzakalsssouki"
          target="_blank"
          aria-label="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:abdulrzakalsssouki@gmail.com"
          target="_blank"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Social;
