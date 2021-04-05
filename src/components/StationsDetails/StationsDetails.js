import './StationsDetails.css';
import arrowLeft from './img/icon_arrow--left.svg'

function StationsDetails({item, onRequestClose}) {
  return (
    <div className="stm-details">
      <div className="stm-details-header df aic">
        <button 
        onClick={onRequestClose} 
        className="stm-details-back">
          <img src={arrowLeft} alt="" className="stm-details-back__icon"/>
        </button>
          <h1 className="stm-details-title">{item.name}</h1>

      </div>
      <div className="stm-details-content">
      <ul className="stm-details-list">
        { Object.keys(item).map(key => (
          <li key={key} className="stm-details-item mb2">
            <div className="stm-details-item__label">{key}</div>
            <div className="stm-details-item__value">{item[key]}</div>
          </li>
        )) }
      </ul>
      </div>
    </div>
    
  );
}

export default StationsDetails;