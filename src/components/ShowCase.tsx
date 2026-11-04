import React from "react";
import "../css/showCase.css";

interface ShowCaseData {
  ImgSrc?: string;
  title: string;
  descriptipon: string;
  tools: string;
  url: string;
}

const ShowCase = React.memo(
  ({ ImgSrc, title, descriptipon, tools, url }: ShowCaseData) => {
    const handleProject = () => {
      if (url) window.open(url, "_blank");
    };
    return (
      <div className="container-sc">
        <div onClick={handleProject}>
          <h3>{title}</h3>
          {ImgSrc && <img src={ImgSrc} alt={`${title} preview`} />}
          <p>{descriptipon}</p>
          <p>{tools}</p>
        </div>
      </div>
    );
  }
);

export default ShowCase;
