import React from 'react';
import Header from "./components/Header";
import AddWord from "./components/AddWord";
import WordsList from "./components/WordsList";

import {GlobalProvider} from "./context/GlobalState";

import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container" >
        <AddWord />
        <WordsList />
      </div>
    </GlobalProvider>
  );
}

export default App;
