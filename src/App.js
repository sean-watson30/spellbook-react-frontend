// import { useState, useEffect } from 'react';
import './App.css';
// _____Services________
// import { auth } from './services/firebase';
// _____Components________
import Header from './components/Header'
import Bookmark from './components/Bookmark';
import Footer from './components/Footer'
// _____Pages________


function App() {
  return (
    <div className="App">
      <Header />
      
        <Bookmark />
    
      <Footer />
    </div>
  );
}

export default App;
