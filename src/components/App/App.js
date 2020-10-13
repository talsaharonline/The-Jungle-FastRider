import React from 'react';
import styles from './App.module.css';

import Header from '../UI/Header/Header';
import Home from '../Home/Home';
import AccessCode from '../AccessCode/AccessCode';

import { Route, Switch } from 'react-router-dom';


function App() {

  return (

    <div className={styles.App}>

      <Header />

      <Switch>

        <Route path="/access-code" component={AccessCode} />
        <Route exact path="/" component={Home} />

      </Switch>

    </div>

  );

}

export default App;
