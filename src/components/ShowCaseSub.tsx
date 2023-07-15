import React from "react";
import { AppstoreFilled } from "@ant-design/icons";
import "../css/showCaseSub.css";

interface ShowCaseSub {
  tools: string;
  title: string;
  description: string;
  url: string;
}

const ShowCaseSub = React.memo(
  ({ tools, title, description, url }: ShowCaseSub) => {
    const handleProject = () => {
      window.open(url, "_blank");
    };
    return (
      <div className="container-sc-s">
        <div className="sub-card">
          <AppstoreFilled />
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{tools}</p>
          {url !== "" && <button onClick={handleProject}>Open Project</button>}
        </div>
      </div>
    );
  }
);
export default ShowCaseSub;
