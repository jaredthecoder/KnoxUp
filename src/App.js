import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import AppStyles from './App.styled.js';
import GlobalStyles from './Global.styled.js';
import Header from './components/header';
import Routes from './routes';
import theme from './theme';
import SplashScreen from './components/splashScreen';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    window.setTimeout(() => setLoaded(true), 2000);
  });

  return (
    <Router>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="/global.css" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <AppStyles className="App">
          <AnimatePresence>{!isLoaded && <SplashScreen />}</AnimatePresence>
          {isLoaded && (
            <>
              <Header />
              <section className="content">
                <Routes />
              </section>
            </>
          )}
        </AppStyles>
      </ThemeProvider>
    </Router>
  );
};

export default App;
