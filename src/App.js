import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './containers/Header'
import MainSection from './containers/MainSection'
import FooterPlayer from './components/FooterPlayer'

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div>
      <Header />
      <div className="flex relative">
        <MainSection   />
        <FooterPlayer  />
      </div>
    </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
