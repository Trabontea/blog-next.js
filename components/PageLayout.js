import BlogNavbar from "./BlogNavbar";
import {Container} from "react-bootstrap";
import Head from 'next/head';
import React from "react";
import {useTheme} from "../providers/ThemeProvider";

export default function PageLayout({children, className}) {
  const {theme, toggleTheme} =  useTheme();

  return (
    <div className={theme.type}>
      <Head>
        <title>Trabontea</title>
        <meta name="keywords" content="music" />
      </Head>
      <Container>
        <BlogNavbar
            theme={theme}
            toggleTheme={toggleTheme}
        />

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
      <style jsx global> {
        `html, body { 
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: all 0.2s ease-out 0s;
        }
        `}</style>
    </div>
  )
}