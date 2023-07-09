import "../css/showCase.css";

interface ShowCaseData {
  ImgSrc: string;
  title: string;
  descriptipon: string;
  tools: string;
  url: string;
}

function ShowCase(props: ShowCaseData) {
  const handleProject = () => {
    window.open(props.url, "_blank");
  };
  return (
    <div className="container-sc">
      <div onClick={handleProject}>
        <h3>{props.title}</h3>
        <img src={props.ImgSrc} alt="Project image" />
        <p>{props.descriptipon}</p>
        <p>{props.tools}</p>
      </div>
    </div>
  );
}

export default ShowCase;
