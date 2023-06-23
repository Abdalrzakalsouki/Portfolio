import { useState } from "react";
import "../css/historyList.css";

interface HistoryListData {
  titles: string[];
}

const HistorySideList = (props: HistoryListData) => {
  const handleActiveElement = (index: number) => {
    setActiveElement(index);
  };

  const [activeElement, setActiveElement] = useState<number>(0);
  return (
    <div>
      <ul className="historyList">
        {props.titles.map((title, index) => {
          return (
            <li
              className={activeElement === index ? "active-element" : ""}
              onClick={() => handleActiveElement(index)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistorySideList;
