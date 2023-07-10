import { ReactComponent as Logo } from "./assets/logo.svg";
import "./css/loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <Logo className="loader" />
    </div>
  );
};

export default Loader;
