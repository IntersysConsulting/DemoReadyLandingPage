import React from 'react';
import './App.css';
import Header from './components/header/Header';
import CallToAction from './components/calltoaction/CallToAction';
import Partnership from './components/partners/Partnership';
import Footer from './components/footer/footer'
import Services from "./components/containers/services/services"

const App = () => (
    <div>
      <Header></Header>
      <CallToAction></CallToAction>
      <Services/>
      <footer id="partner">
        <Partnership/>
        <Footer/>
      </footer>
    </div>    
  );

export default App;