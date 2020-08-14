import React from 'react';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';

import Header from './components/Header';


import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import { WatchListContextProvider } from "./context/WatchListContext";

function App() {
  return (
    <div className="container">

    <WatchListContextProvider>
        <Header/>
        <BrowserRouter>
          <Route exact path="/" component={CoinSummaryPage}/>
        </BrowserRouter>
      </WatchListContextProvider>


    </div>
  );
}

export default App;
