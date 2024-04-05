// Main.js
import styles from '../styles/navbar.module.css';

export default function Content() {
  return (
    <main>
      <div className={styles.main}>
      </div>
      {/* <div className={styles.main2}>
      </div> */}
      <div className={styles.container}>
      </div>
      
    </main>
  );
}

const userIsAuthenticated = () => {
  return false;
}

export async function getServerSideProps() {
  if(!userIsAuthenticated()) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
}



