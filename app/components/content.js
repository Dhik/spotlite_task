// Main.js
import styles from '../styles/navbar.module.css';

export default function Content() {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.msg}>
          <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
        </div>
      </div>
      <div className={styles.shop}>
        <div className={`${styles.shop1} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <h2>Toys Under $30</h2>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg)" }}></div>
            <p><a href="#">Shop now</a></p>
          </div>
        </div>
        <div className={`${styles.shop2} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <h2>Deals & Promotions</h2>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg)" }}></div>
            <p><a href="#">Shop now</a></p>
          </div>
        </div>
        <div className={`${styles.shop3} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <h2>Health & Personal Care</h2>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg)" }}></div>
            <p><a href="#">Shop now</a></p>
          </div>
        </div>
        <div className={`${styles.shop4} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <h2>New arrivals in Toys</h2>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg)" }}></div>
            <p><a href="#">Shop now</a></p>
          </div>
        </div>
        {/* Repeat for other shop items */}
      </div>
    </main>
  );
}
