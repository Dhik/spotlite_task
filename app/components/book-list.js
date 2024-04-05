'use client';
import styles from '../styles/navbar.module.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { debounce } from 'lodash';
import Book from './book';
import SearchBook from './search-book';
import Sidebar from './sidebar';

export default function BookList({searchTerm}) {
  const [books, setBooks] = useState([]);
  const [mainInput, setMainInput] = useState('');
  const [filter, setFilter] = useState(undefined); // Initialize filter state
  const [titleFilter, setTitleFilter] = useState('');

  const didFetchRef = useRef(false);

  useEffect(() => {
    if (searchTerm) {
      fetchBooks(searchTerm);
    } else {
      fetchBooks();
    }
  }, [searchTerm]);

  async function fetchBooks(searchTerm = '') {
    let path = '/books';
    if (searchTerm) {
      path = `/books/search/${encodeURIComponent(searchTerm)}`;
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    const data = await res.json();
    setBooks(data);
  }

  const debouncedUpdateBook = useCallback(debounce(updateBook, 500), []);

  async function updateBook(book) {
    const data = {
      title: book.title,
      writer: book.writer,
      coverImage: book.coverImage,
      point: book.point,
      tag: book.tag,
    };
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/books/${book.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async function addBook(title) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/books`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const json = await res.json();
      const copy = [...books, json];
      setBooks(copy);
    }
  }

  async function handleDeleteBook(id) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const idx = books.findIndex((book) => book.id === id);
      const copy = [...books];
      copy.splice(idx, 1);
      setBooks(copy);
    }
  }

  function handleMainInputChange(e) {
    setMainInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if (mainInput.length > 0) {
        addBook(mainInput);
        setMainInput('');
      }
    }
  }

  function handleFilterChange(value) {
    setFilter(value);
    fetchBooks(value);
  }

  function handleTitleFilterChange(title) {
    setTitleFilter(title);
    fetchBooks(filter);
  }

  return (
    <div>
      <h4 className={styles.headerBook}>Book List</h4>
      {/* <SearchBook onSearch={handleTitleFilterChange} /> Pass the handler for title filter */}
      {!books && <div>Loading...</div>}
      {books && (
      <div className={styles.container}>
        <Sidebar />
          
        <div className={styles.shop}>
          {books.map((book) => (
            <div key={book.id} className={`${styles.shop1} ${styles.box}`}>
              <div className={styles['box1-content']}>
                <div className={styles.box1Img} style={{ backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg)` }}></div>
                <h2 className={styles.title}>{book.title}</h2>
                <p className={styles.writer}>Writer: {book.writer}</p>
                <p className={styles.price}>{book.point}</p>
                <p className={styles.tags}>Tags: {book.tag.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
      )}
    </div>
  );
}
