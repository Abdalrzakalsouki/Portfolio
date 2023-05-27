import "../css/showCase.css";

interface ShowCaseData {
  ImgSrc: string;
  title: string;
  descriptipon: string;
}

function ShowCase(props: ShowCaseData) {
  return (
    <div className="container-sc">
      <div>
        <img src={props.ImgSrc} alt="Project image" />
        <div className="overLay">
          <h4>{props.title}</h4>
          <button className="view-btn"> View Project </button>
          <p>{props.descriptipon}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
