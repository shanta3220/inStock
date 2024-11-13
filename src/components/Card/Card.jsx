import "./Card.scss"


function Card({ title, children }) {
  return (
    <div className="card">
      <h1 className="card__name">{title}</h1>
      <div className="card__content">
        {children}
      </div>
    </div>
  );
}

export default Card;
