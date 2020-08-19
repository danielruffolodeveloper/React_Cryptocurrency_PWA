import React from 'react';
import CoinSummaryPage from './pages/CoinSummaryPage';
import CoinDetailPage from './pages/CoinDetailPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WatchListContextProvider } from "./context/WatchListContext";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
  <div className="container-fluid">

    <WatchListContextProvider>
       <Navbar/>
        <BrowserRouter>
          <Route exact path="/" component={CoinSummaryPage}/>
          <Route exact path="/coins/:id" component={CoinDetailPage}/>

        </BrowserRouter>
        <Footer/>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
