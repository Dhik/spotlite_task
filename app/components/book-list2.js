// book-list.js
'use client';
import styles from '../styles/todo-list.module.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { debounce } from 'lodash';
import Book from './book';
import SearchBook from './search-book';

export default function BookList() {
  const [books, setBooks] = useState(null);
  const [filter, setFilter] = useState(undefined); // Initialize filter state

  const didFetchRef = useRef(false);

  useEffect(() => {
    if (!didFetchRef.current) {
      didFetchRef.current = true;
      fetchBooks();
    }
  }, []);

  async function fetchBooks(title) {
    let path = '/books';
    if (title) {
      path = `/books/search/${encodeURIComponent(title)}`; // Encode title for URL
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    const json = await res.json();
    setBooks(json);
  }

  // Remaining code for handling book updates, deletions, filtering, etc.

  return (
    <div className={styles.container}>
      <SearchBook onSearch={fetchBooks} />
      {/* Render books */}
    </div>
  );
}
