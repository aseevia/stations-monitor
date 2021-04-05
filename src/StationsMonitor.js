import './StationsMonitor.css';
import StationList from './components/StationsList/StationList';
import Station from './components/Station/Station';
import { useEffect, useReducer, useCallback } from 'react';

import Modal from 'react-modal';
import StationsDetails from './components/StationsDetails/StationsDetails';
import StationsDataService from './services/StationsDataService';

const dataService = new StationsDataService();

function StationsMonitor() {
  
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    { 
      busy: false, 
      busyMessage: "Loading...",
      stations: null, 
      activeStation: null,
     }
  );

  const loadStations = useCallback(
    () => {
      setState({busy: true, busyMessage: "Loading stations..."});
        dataService.get()
          .then(data => {
            console.log("Stations loaded:", data);
            setState({busy: false, stations: data});
          })
          .catch(err=>{
            setState({
              busy: true, 
              busyMessage: <div><p className="mb1">Failed to load stations</p><button className="stm-link" onClick={()=>loadStations()}>try again</button></div>
            });
            console.error("Error loading stations:", err);
          });
    },
    []
  );

  useEffect(() => {
    // Get Stations data if the list is empty
    if (!state.stations && !state.busy) loadStations();
  }, [state.stations, state.busy, loadStations]);

  
  function closeStationDetails(){
    setState({activeStation: null});
  }

  return (
    <div className="stm">
      <div className="stm__in">
        <div className="container">
          <h1 className="mb1">Your stations</h1>
          <StationList items={state.stations} Item={Station} itemClick={(item)=>setState({activeStation: item})}/>
        </div>
      </div>

      <Modal
        isOpen={!!state.activeStation}
        onRequestClose={closeStationDetails}
        contentLabel={"contentLabel"}
        className={"modal"}
        // overlayClassName="modal-overlay"
      >
      
      <div className="stm">
        <div className="stm__in">
          <div className="container">
            {
              state.activeStation && <StationsDetails item={state.activeStation} onRequestClose={closeStationDetails}/>
            }
          </div>
        </div>
      </div>
      </Modal>

      <Modal
        isOpen={state.busy}
        className={"modal-message"}
        // overlayClassName="modal-overlay"
      >
      <div className="tac">{state.busyMessage}</div>
      </Modal>

    </div>
  );
}

export default StationsMonitor;
