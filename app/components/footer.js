// Footer.js
import styles from '../styles/navbar.module.css';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.firstPanel}>
          Back to top
        </div>
        <div className={styles.secondPanel}>
          <ul>
            <li><p>Get to Know Us</p></li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
          <ul>
            <li><p>Get to Know Us</p></li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
          <ul>
            <li><p>Get to Know Us</p></li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
          <ul>
            <li><p>Get to Know Us</p></li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
          {/* Repeat for other lists */}
        </div>
        <div className={styles.thirdPanel}>
          <div className={styles.logo}></div>
          <div className={styles.selectOptions}>
            <select name="" id="" className={styles.select}>
              <option value="En">English</option>
            </select>
            <select name="" id="" className={styles.select}>
              <option value="1">$ USD - U.S. Dollar</option>
            </select>
            <select name="" id="" className={styles.select}>
              <option value="4"> United States</option>
            </select>
          </div>
        </div>
        <div className={styles.panel4}>
          <div className={styles.page}>
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Your Ads Privacy Choices</a>
          </div>
          <div className={styles.copyright}>
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    );
  }
