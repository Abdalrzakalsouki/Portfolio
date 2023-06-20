import { AppstoreFilled } from "@ant-design/icons";
import "../css/showCaseSub.css";
interface ShowCaseSub {
  tools: string;
  title: string;
  description: string;
  url: string;
}

function ShowCaseSub(props: ShowCaseSub) {
  return (
    <div className="container-sc-s">
      <div className="sub-card">
        <AppstoreFilled />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p>{props.tools}</p>
        <button>Open Project</button>
      </div>
    </div>
  );
}
export default ShowCaseSub;
