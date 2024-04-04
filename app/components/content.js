// Main.js
import styles from '../styles/navbar.module.css';

export default function Content() {
  return (
    <main>
      <div className={styles.main}>
      </div>
      <div className={styles.main2}>
      </div>
      <div className={styles.container}>
      <div className={styles.shop}>
        <div className={`${styles.shop1} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg)" }}></div>
            <h2 className={styles.title}>Toys Under $30</h2>
            <p className={styles.writer}>Writer</p>
            <p className={styles.price}>$19.78</p>
          </div>
        </div>
        <div className={`${styles.shop1} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg)" }}></div>
            <h2 className={styles.title}>Toys Under $30</h2>
            <p className={styles.writer}>Writer</p>
            <p className={styles.price}>$19.78</p>
          </div>
        </div>
        <div className={`${styles.shop1} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg)" }}></div>
            <h2 className={styles.title}>Toys Under $30</h2>
            <p className={styles.writer}>Writer</p>
            <p className={styles.price}>$19.78</p>
          </div>
        </div>
        <div className={`${styles.shop1} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg)" }}></div>
            <h2 className={styles.title}>Toys Under $30</h2>
            <p className={styles.writer}>Writer</p>
            <p className={styles.price}>$19.78</p>
          </div>
        </div>
        {/* Repeat for other shop items */}
      </div>
      </div>
      
    </main>
  );
}
