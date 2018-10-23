import React, { Component } from 'react';
import SearchBar from './components/searchbar/SearchBar';
import Cards from './components/card/Cards'; 
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/*<div className="mt-3 text-center container-fluid">
          <SearchBar/>
        </div>*/}
        <Cards/>
      </div>
    );
  }
}

export default App;
