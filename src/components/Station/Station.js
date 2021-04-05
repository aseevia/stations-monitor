import './Station.css';
import iconOn from './img/icon_available.svg';
import iconOff from './img/icon_offline.svg';

function Station(props) {
  return (
    <li className="stm-station mb05" onClick={()=>props.onClick(props.item)}>
      <div className="stm-station__in">
          <h3 className="stm-station__name">{props.item.name}</h3>
          <div className="stm-station-status">
              <img src={props.item.available ? iconOn : iconOff } alt="Station status" className="stm-station-status-icon"/>
              {props.item.available ? "Available" : "Offline"}
          </div>
          
      </div>
    </li>
  );
}

export default Station;