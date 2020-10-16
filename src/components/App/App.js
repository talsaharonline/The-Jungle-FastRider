import React from 'react';
import styles from './App.module.css';

import { Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import Header from '../UI/Header/Header';

import Home from '../Pages/Home/Home';
import AccessCodes from '../Pages/AccessCodes/AccessCodes';



function App() {

  return (

    <div className={styles.App}>

      <Header />

      <Switch>

        <ToastProvider>

          <Route path="/access-codes" component={AccessCodes} />
          <Route exact path="/" component={Home} />
          
        </ToastProvider>

      </Switch>

    </div>

  );

}

export default App;
