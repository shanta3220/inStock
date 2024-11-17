import './CancelSaveButtons.scss';
import { useNavigate } from "react-router-dom";


function CancelSaveButtons() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/inventory"); // Redirect to inventory page when Cancel is clicked
  };
  return (
    <div className='buttons'>
      <button className='buttons__button'
      onClick={handleCancel}>
        Cancel
        </button>
      <button className='buttons__button buttons__button--save'>Save</button>
    </div>
  )
}

export default CancelSaveButtons
