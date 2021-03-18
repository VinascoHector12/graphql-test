import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import imagen from './assets/img/logo1.jpg';
import Banner from './components/banner/Banner';
import {Modal} from './components/modal/Modal'



function App() {

  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <div className="App">
      <Header pic={imagen}></Header>
      <Banner></Banner>
      
    </div>
  );
}

export default App;


