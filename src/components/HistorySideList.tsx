import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/historyList.css";

interface HistoryListData {
  titles: string[];
  onActiveChange: (newState: number) => void;
  currentIndex: number;
}

const HistorySideList = React.memo((props: HistoryListData) => {
  const handleActiveElement = (index: number) => {
    props.onActiveChange(index);
  };

  return (
    <div>
      <ul className="historyList">
        {props.titles.map((title, index) => {
          return (
            <li
              key={uuidv4()}
              className={props.currentIndex === index ? "active-element" : ""}
              onClick={() => handleActiveElement(index)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default HistorySideList;
