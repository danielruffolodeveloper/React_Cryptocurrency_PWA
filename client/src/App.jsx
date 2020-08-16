import React from 'react';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import logo from './logo.png'
import Header from './components/Header';


import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import { WatchListContextProvider } from "./context/WatchListContext";

function App() {
  return (
    <div className="container-fluid">

    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src={logo} width="60" height="40" class="d-inline-block align-top mr-2 " alt="" loading="lazy"/>
        Crypto PWA
      </a>
    </nav>

    <WatchListContextProvider>
        <Header/>
        <BrowserRouter>
          <Route exact path="/" component={CoinSummaryPage}/>
        </BrowserRouter>
      </WatchListContextProvider>

      <footer class="footer mt-auto py-3">
        <div class="container-fluid">
          <span class="text">Powered by CoinGecko.</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
