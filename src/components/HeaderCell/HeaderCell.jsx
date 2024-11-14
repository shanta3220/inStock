import "./HeaderCell.scss";
import sortArrow from "../../assets/Icons/sort-24px.svg";

function HeaderCell({ label, sortable = false, onSort,align = 'left' }) {
  return (
    <div className={`header-cell header-cell--${align}`}>
      <span className="header-cell__title">{label}</span>
      {sortable && (
        <button onClick={onSort} className="header-cell__sort-button">
          <img src={sortArrow} alt="Sort arrow" className="header-cell__sort-arrow" />
        </button>
      )}
    </div>
  );
}

export default HeaderCell;
