import React from 'react';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';

import Header from './components/Header';


import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Route exact path="/" component={CoinSummaryPage}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
