import './StationList.css';

function StationList({items, Item, itemClick}) {
  return (
    <ul className="stm-stations-list">
          {
            items && items.map(item => <Item key={item['station_ID']} onClick={itemClick} item={item} />)
          }
    </ul>
  );
}

export default StationList;