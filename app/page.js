// import Image from "next/image";
// import Head from 'next/head';
// import Layout from './components/layout';
// import ToDoList from './components/todo-list';

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Full Stack Book To Do</title>
//         <meta name="description" content="Full Stack Book To Do" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Layout>
//         <ToDoList />
//       </Layout>
//     </div>
//   );
// }

import Image from "next/image";
import Head from 'next/head';
import Layout from './components/layout';
import BookList from './components/book-list'; // Import BookList component instead of ToDoList
import CustomNavbar from './components/custom-navbar';
import Banner from "./components/banner";
import Footer from "./components/footer";
import Content from "./components/content";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Stack Book List</title> {/* Change the title to "Full Stack Book List" */}
        <meta name="description" content="Full Stack Book List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar /> {/* Render the Navbar component */}
      <Content /> {/* Render the Content component */}
      <Layout>
        {/* <BookList /> Render the BookList component instead of ToDoList */}
      </Layout>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}
