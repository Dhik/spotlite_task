// CustomNavbar.js
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import React from 'react';

export default function CustomNavbar() {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.navlogo}>
          <div className={`${styles.logo} ${styles.border}`}></div>
        </div>
        <div className={`${styles.navbarAdd} ${styles.border}`}>
          <p className={`${styles.addfirst} icon`}>Deliver to</p>
          <div className={styles.addicon}>
            <i className="fa-solid fa-location-dot icon"></i>
            <p className={`${styles.addsecond} icon`}>Indonesia</p>
          </div>
        </div>
        
        <div className={styles.navSearch}>
          <select className={styles.searchOption1}>
            <option value="All" className={styles.searchOption2}>All</option>
          </select>
          <input type="text" placeholder="Search Amazon" className={styles.searchInput} />
          <div className={styles.searchIcon}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className={`${styles.languageoption} ${styles.border}`}>
          <div className={styles.american}></div>
          <select className={styles.lanoption}>
            <option value="lan">EN</option>
          </select>
        </div>
        <div className={`${styles.sign} ${styles.border}`}>
          <p className={styles.hello}>Hello, sign in</p>
          <div className={styles.account}>
            <select className={styles.accountSign}>
              <option value="Account">Account &amp; Lists</option> {/* Replace ' with &amp; */}
            </select>
          </div>
        </div>
        <div className={`${styles.box6} ${styles.border}`}>
          <p className={styles.return}>Returns</p>
          <p className={styles.order}>&amp; Orders</p> {/* Replace ' with &amp; */}
        </div>
        <div className={`${styles.cart} ${styles.border}`}>
          <i className="fa-solid fa-cart-shopping"></i>
          cart
        </div>
      </div>
      <div className={styles.secondNav}>
        <div className={`${styles.allicon} ${styles.border}`}>
          <i className="fa-solid fa-bars"></i>
          <p className={styles.list}>All</p>
        </div>
        <div className={styles.panelOps}>
          <p className={`${styles.ptag} ${styles.border}`}>Today&apos;s Deals</p> {/* Replace ' with &apos; */}
          <p className={`${styles.ptag} ${styles.border}`}>Customer Service</p>
          <p className={`${styles.ptag} ${styles.border}`}>Registry</p>
          <p className={`${styles.ptag} ${styles.border}`}>Gift Cards</p>
          <p className={`${styles.ptag} ${styles.border}`}>Sell</p>
        </div>
        <div className={styles.deals}>
          <p>Shop deals in Electronics</p>
        </div>
      </div>
    </header>
  );
}
