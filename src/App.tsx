import React from 'react';
import './App.css';
import Header from './components/header/Header';
import imagen from './assets/img/logo1.jpg';
import Banner from './components/banner/Banner';




const App: React.FC = () => {

  return (
    <div className="App">
      <Header pic={imagen}></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;


