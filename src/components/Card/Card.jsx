import "./Card.scss";
import { useNavigate } from "react-router-dom";
import backImage from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-white-24px.svg";

function Card({
  title,
  returnPath,
  handleEditOnClick,
  headerContent,
  children,
}) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title-bar">
          {returnPath && (
            <img
              className="card__back_image"
              src={backImage}
              onClick={() => {
                navigate(returnPath);
              }}
            />
          )}
          <h1 className="card__name">{title}</h1>
          {handleEditOnClick && (
            <button
              className="card__edit-button card__edit-button--mob"
              onClick={handleEditOnClick}
            ></button>
          )}
        </div>
        <div className="card__header-section">
          {headerContent}
          {handleEditOnClick && (
            <button
              className="card__edit-button card__edit-button--tablet"
              onClick={handleEditOnClick}
            ></button>
          )}
        </div>
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
}

export default Card;
