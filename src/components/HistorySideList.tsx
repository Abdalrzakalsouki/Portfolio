import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/historyList.css";

interface HistoryListData {
  titles: string[];
  onActiveChange: (newState: number) => void;
  currentIndex: number;
}

const HistorySideList = React.memo(
  ({ titles, onActiveChange, currentIndex }: HistoryListData) => {
    const handleActiveElement = (index: number) => {
      onActiveChange(index);
    };

    return (
      <div>
        <ul className="historyList">
          {titles.map((title: string, index: number) => {
            return (
              <li
                key={uuidv4()}
                className={currentIndex === index ? "active-element" : ""}
                onClick={() => handleActiveElement(index)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default HistorySideList;
