import Image from 'next/image';
import styles from '../styles/todo.module.css';

export default function Book(props) {
  const { book, onChange, onDelete } = props;

  return (
    <div className={styles.bookRow} key={book.id}>
      <input
        className={styles.bookCheckbox}
        name="completed"
        type="checkbox"
        checked={book.completed} // Assuming book.completed is a boolean value
        onChange={(e) => onChange(e, book.id)}
      ></input>
      <input
        className={styles.bookInput}
        autoComplete="off"
        name="title" // Assuming you want to edit the title
        type="text"
        value={book.title}
        onChange={(e) => onChange(e, book.id)}
      ></input>
      {/* Assuming other book information like author, cover image, etc. are displayed here */}
      <button className={styles.deleteBtn} onClick={() => onDelete(book.id)}>
        <Image src="/material-symbols_delete-outline-sharp.svg" width="24" height="24" />
      </button>
    </div>
  );
}
