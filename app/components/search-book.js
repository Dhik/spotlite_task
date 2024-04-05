// search-book.js
import { useState } from 'react';
import styles from '../styles/search-book.module.css';

export default function SearchBook({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSearch() {
    // Call onSearch function passed from parent component with searchInput value
    onSearch(searchInput);
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search by title"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
