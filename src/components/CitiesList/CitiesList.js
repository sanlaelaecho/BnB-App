import styles from './CitiesList.module.scss';
import MenuListItem from '../CitiesListItem/CitiesListItem';

export default function CitiesList({ menuItems, handleAddToOrder }) {
  const cities = menuItems.map(item =>
    <CitiesListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
    />
  );
  return (
    <main className={styles.CitiesList}>
      {cities}
    </main>
  );
}