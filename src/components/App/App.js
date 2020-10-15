import React from 'react';
import styles from './App.module.css';

import { Route, Switch } from 'react-router-dom';

import Header from '../UI/Header/Header';
import Home from '../Home/Home';
import AccessCode from '../AccessCode/AccessCode';

import { ToastProvider } from 'react-toast-notifications';


function App() {

  return (

    <div className={styles.App}>

      <Header />

      <Switch>

        <ToastProvider>

          <Route path="/access-codes" component={AccessCode} />
          <Route exact path="/" component={Home} />
          
        </ToastProvider>

      </Switch>

    </div>

  );

}

export default App;
