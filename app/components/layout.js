// import styles from '../styles/layout.module.css'

// export default function Layout(props) {
//   return (
//     <div className={styles.layout}>
//       <h1 className={styles.title}>To Do</h1>
//       {props.children}
//     </div>
//   )
// }


import styles from '../styles/layout.module.css';
import { Container } from 'react-bootstrap';

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>Book List</h1> {/* Change the title to "Book List" */}
      {props.children}
    </div>
  //   <Container> {/* Wrap children in Bootstrap Container */}
  //   {props.children}
  // </Container>
  );
}
