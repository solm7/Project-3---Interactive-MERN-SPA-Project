function Card(props) {
  return (
    <div className="card">
      <img
        src={props.data.imgLink}
        className="card-img-top"
        alt={props.data.imgAltText}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fs-2">{props.data.cardTitle}</h5>
        <p className="card-text">{props.data.cardText}</p>
        <div className="button-box">
          <a href={props.data.cardLink}>
            <button type="button" className="btn btn-primary">
              Visit Deployment
            </button>
          </a>
          <a href={props.data.gitLink}>
            <button type="button" className="btn btn-primary">
              Visit Github Repo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
