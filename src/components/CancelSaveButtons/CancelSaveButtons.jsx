import './CancelSaveButtons.scss'

function CancelSaveButtons() {
  return (
    <div className='buttons'>
      <button className='buttons__button'>Cancel</button>
      <button className='buttons__button buttons__button--save'>Save</button>
    </div>
  )
}

export default CancelSaveButtons
