import { library, config } from '@fortawesome/fontawesome-svg-core';
import React from "react";
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(faBorderAll, faList, faSortNumericDown, faSortNumericUp, faSun, faMoon);
import ThemeProvider from "../providers/ThemeProvider";
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import "react-toggle/style.css"
import 'styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp;
