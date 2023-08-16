import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleOpenCitiesPage }) {
  return (
    <div className={styles.MenuListItem}>
      <div className={styles.img + ' ' + 'flex-ctr-ctr'}><img className={styles.img}src={menuItem.img} /></div>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>${menuItem.price}</span>
        <button className="btn-sm" onClick={() => handleOpenCitiesPage(menuItem._id)}>
          Cities
        </button>
      </div>
    </div>
  );
}
