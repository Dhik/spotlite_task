'use client';
import styles from '../styles/todo-list.module.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { debounce } from 'lodash';
import Book from './book';

export default function BookList() {
  const [books, setBooks] = useState(null);
  const [mainInput, setMainInput] = useState('');
  const [filter, setFilter] = useState(undefined); // Initialize filter state

  const didFetchRef = useRef(false);

  useEffect(() => {
    if (!didFetchRef.current) {
      didFetchRef.current = true;
      fetchBooks();
    }
  }, []);

  async function fetchBooks(completed) {
    let path = '/books';
    if (completed !== undefined) {
      path = `/books?completed=${completed}`;
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    const json = await res.json();
    setBooks(json);
  }

  const debouncedUpdateBook = useCallback(debounce(updateBook, 500), []);

  function handleBookChange(e, id) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const copy = [...books];
    const idx = books.findIndex((book) => book.id === id);
    const changedBook = {
      ...books[idx],
      [name]: value,
    };
    copy[idx] = changedBook;
    debouncedUpdateBook(changedBook);
    setBooks(copy);
  }

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

  return (
    <div className={styles.container}>
      <div className={styles.mainInputContainer}>
        <input
          className={styles.mainInput}
          placeholder="Enter book title"
          value={mainInput}
          onChange={(e) => handleMainInputChange(e)}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      {!books && <div>Loading...</div>}
      {books && (
        <div>
          {books.map((book) => {
            return <Book key={book.id} book={book} onDelete={handleDeleteBook} onChange={handleBookChange} />;
          })}
        </div>
      )}
      <div className={styles.filters}>
        <button className={`${styles.filterBtn} ${filter === undefined && styles.filterActive}`} onClick={() => handleFilterChange()}>All</button>
        <button className={`${styles.filterBtn} ${filter === false && styles.filterActive}`} onClick={() => handleFilterChange(false)}>Active</button>
        <button className={`${styles.filterBtn} ${filter === true && styles.filterActive}`} onClick={() => handleFilterChange(true)}>Completed</button>
      </div>
    </div>
  );
}
