// Banner.js
import styles from '../styles/navbar.module.css'; // Import your CSS file

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles['banner-content']}>
        <div className={styles.panel}>
          <span className={`${styles['material-symbols-outlined']} material-symbols-outlined`}>menu</span>
          <a href="#">All</a>
        </div>

        <ul className={styles.links}>
          <li><a href="#">Today&apos;s Deals</a></li>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">Registry</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Sell</a></li>
        </ul>
        <div className={styles.deals}>
          <a href="#">Shop deals in Electronics</a>
        </div>
      </div>
    </div>
  );
}
