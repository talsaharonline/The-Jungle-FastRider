import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import styles from './App.module.css';

import Header from '../UI/Header/Header';

import Home from '../Pages/Home/Home';
import AccessCode from '../Pages/AccessCode/AccessCode';


function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollPositionHandler = () => {

    const position = window.pageYOffset;

    setScrollPosition(position);

  };

  const scrollEventHandler = () => {

    window.addEventListener('scroll', scrollPositionHandler, { passive: true });

    return () => {

      window.removeEventListener('scroll', scrollPositionHandler);

    };

  };

  useEffect(() => {

    scrollEventHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (

    <div className={styles.App}>

      <Header />

      <Switch>

        <ToastProvider>

          <Route path="/access-code" component={AccessCode} />
          <Route exact path="/" render={() => <Home scrollPosition={scrollPosition} />} />

        </ToastProvider>

      </Switch>

    </div>

  );

};

export default App;
