import BlogNavbar from "./BlogNavbar";
import {Container} from "react-bootstrap";
import Head from 'next/head';
import React from "react";

export default function PageLayout({children, className}) {
  return (
    <>
      <Head>
        <title>Trabontea</title>
        <meta name="keywords" content="music" />
      </Head>
      <Container>
        <BlogNavbar />

        {/*Aici intra continutul*/}
        <div className={`page-wrapper ${className}`}>
          {children}
        </div>

        <footer className="page-footer">
          <div>
            <a href="#">courses</a>{' | '}
            <a href="#">github</a>{' | '}
            <a href="#">facebook</a>
          </div>
        </footer>
      </Container>
    </>
  )
}