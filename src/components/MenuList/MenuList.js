import styles from './MenuList.module.scss';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleOpenCitiesPage }) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      handleOpenCitiesPage={handleOpenCitiesPage}
      menuItem={item}
    />
  );
  return (
    <main className={styles.MenuList}>
      {items}
    </main>
  );
}