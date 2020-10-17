import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

import { Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import Header from '../UI/Header/Header';

import Home from '../Pages/Home/Home';
import AccessCodes from '../Pages/AccessCodes/AccessCodes';


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

  }

  useEffect(() => {

    scrollEventHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (

    <div className={styles.App}>

      <Header />

      <Switch>

        <ToastProvider>

          <Route path="/access-codes" component={AccessCodes} />
          <Route exact path="/" render={() => <Home scrollPosition={scrollPosition} />} />

        </ToastProvider>

      </Switch>

    </div>

  );

}

export default App;
