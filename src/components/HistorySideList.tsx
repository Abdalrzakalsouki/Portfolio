import "../css/historyList.css";

interface HistoryListData {
  titles: string[];
  onActiveChange: (newState: number) => void;
  currentIndex: number;
}

const HistorySideList = (props: HistoryListData) => {
  const handleActiveElement = (index: number) => {
    props.onActiveChange(index);
  };

  return (
    <div>
      <ul className="historyList">
        {props.titles.map((title, index) => {
          return (
            <li
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
};

export default HistorySideList;
