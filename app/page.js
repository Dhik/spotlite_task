'use client';
// Home.js
import React, { useState } from 'react';

import Image from "next/image";
import Head from 'next/head';
import Layout from './components/layout';
import BookList from './components/book-list'; // Import BookList component instead of ToDoList
import CustomNavbar from './components/custom-navbar';
import Banner from "./components/banner";
import Footer from "./components/footer";
import Content from "./components/content";
import BookList2 from "./components/book-list2";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Head>
        <title>Full Stack Book List</title> {/* Change the title to "Full Stack Book List" */}
        <meta name="description" content="Full Stack Book List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar onSearch={handleSearch}/> {/* Render the Navbar component */}
      <Content /> {/* Render the Content component */}
      <BookList searchTerm={searchTerm}/> 
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}
