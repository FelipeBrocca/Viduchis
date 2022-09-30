import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Header from './components/Header/Header'
import MainRoutes from './Routes/Routes'
import Footer from './components/Footer/Footer'

import './App.css'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
             <Header />
             <MainRoutes />
             <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
