import styles from './MenuListItem.module.scss';
import {Link} from 'react-router-dom';

export default function MenuListItem({ menuItem }) {
  return (
    <div className={styles.MenuListItem}>
      <div className={styles.img + ' ' + 'flex-ctr-ctr'}><img className={styles.img}src={menuItem.img} /></div>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>${menuItem.price}</span>
        <Link to={`/orders/new/${menuItem._id}`}>
          <button className="btn-sm">Cities</button>
        </Link> 
      </div>
    </div>
  );
}
