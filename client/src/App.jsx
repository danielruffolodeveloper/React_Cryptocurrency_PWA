import React from 'react';
import CoinListPage from './pages/CoinListPage';
import CoinDetailPage from './pages/CoinDetailPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WatchListContextProvider } from "./context/WatchListContext";
import { BrowserRouter, Route } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './App.css';

function App() {
  return (
    <div className="container-fluid">

      <WatchListContextProvider>
        <BrowserRouter>
          <CssBaseline />
          <Container maxWidth="sm">
            <Navbar />
            <Route exact path="/" component={CoinListPage} />
            <Route exact path="/coins/:id" component={CoinDetailPage} />
          </Container>
        </BrowserRouter>
        <Footer />
      </WatchListContextProvider>
    </div>
  );
}

export default App;
