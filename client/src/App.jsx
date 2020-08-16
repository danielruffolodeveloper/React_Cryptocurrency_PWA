import React from 'react';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import { WatchListContextProvider } from "./context/WatchListContext";

function App() {
  return (
  <div className="container-fluid">
    <WatchListContextProvider>
       <Navbar/>
        <BrowserRouter>
          <Route exact path="/" component={CoinSummaryPage}/>
        </BrowserRouter>
        <Footer/>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
