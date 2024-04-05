import Image from 'next/image';
import styles from '../styles/navbar.module.css';

export default function Book(props) {
  const { book, onChange, onDelete } = props;

  return (
    <div className={styles.container}>
      <div className={styles.shop}>
      <div key={book.id}>
      <div className={`${styles.shop1} ${styles.box}`}>
          <div className={styles['box1-content']}>
            <div className={styles.box1Img} style={{ backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg)" }}></div>
            <h2 className={styles.title}>{book.title}</h2>
            <p className={styles.writer}>{book.writer}</p>
            <p className={styles.price}>{book.point}</p>
          </div>
        </div>
    </div>
      </div>
    </div>
    
  );
}
