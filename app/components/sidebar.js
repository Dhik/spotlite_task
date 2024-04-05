// Sidebar.js
import React from 'react';
import styles from '../styles/navbar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h4>Points: 100</h4>
      <hr></hr>
      <h6>Popular Book</h6>
      <hr></hr>
      <h6>Prime Reading</h6>
      <hr></hr>
      <h6>Department</h6>
      <hr></hr>
      {/* Add sidebar content here */}
    </div>
  );
};

export default Sidebar;
