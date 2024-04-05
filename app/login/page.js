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
import Login from "./components/login";

export default function Home() {
  return (
    <div>
      <Login/>
    </div>
  );
}
