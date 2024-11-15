import "./Card.scss"


function Card({ title, headerContent, children }) {
  return (
    <div className="card">
      <div className="card__header">
      <h1 className="card__name">{title}</h1>
      <div className="card__header-section">
        {headerContent}
      </div>
      </div>
      <div className="card__content">
        {children}
      </div>
    </div>
  );
}

export default Card;
