import styles from './CitiesList.module.scss';
import CitiesListItem from '../CitiesListItem/CitiesListItem';
import * as itemsAPI from '../../utilities/items-api';

export default function CitiesList({ menuItems, handleAddToOrder }) {
    //const [disabledBtns, setDisabledBtns] = useState(false)
    //const [departure, setDeparture] = useState(null)
    //const [arrival, setArrival] = useState(null)

    

  const cities = menuItems.map(item =>
    <CitiesListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
      //currentDeparture={departure}
      //setDeparture={setDeparture}
      //currentArrival={arrival}
      //setArrival={setArrival}
    />
  );
  return (
    <main className={styles.CitiesList}>
      {/* <button>API request to push into cart</button> */}
      {cities}
    </main>
  );
}