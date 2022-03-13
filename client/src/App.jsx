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
import TabBar from './components/TabBar';

function App() {
  return (
    <div className="container-fluid">

      <WatchListContextProvider>
        <BrowserRouter>
          <CssBaseline />
          <Container maxWidth="xs">
            <Navbar />
            <Route exact path="/" component={CoinListPage} />
            <TabBar/>
          </Container>
        </BrowserRouter>
        <Footer />
      </WatchListContextProvider>
    </div>
  );
}

export default App;
