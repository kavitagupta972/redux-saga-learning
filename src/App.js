import React from 'react';
import './App.css';

import SearchBar from "./components/SearchBar";
// import SearchReults from "./components/SearchReults";
import Result from "./components/SearchResults";
import Header from './components/Header';

function App() {
  return (
    
      <div className="App-header">
        <Header />
        <div className="container">
          <SearchBar />
          <Result />
        </div>
      </div>
    
  );
}

export default App;
