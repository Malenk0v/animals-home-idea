import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const { page } = useSelector((state) => state.page);
  return (
    <div className="App">
      <Header />
      {page}
      <Footer />
    </div>
  );
}

export default App;
