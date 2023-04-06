import './BtnBack.css'

const BtnBack = (props) => {

  return (
    <div className='BtnBack'>
        <button className='back' type='button' id="btnBack" onClick={props.onclick}><i class="fa-solid fa-arrow-left fa-fade"></i></button>
    </div>
  )
}

export default BtnBack