import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import CallToAction from './components/calltoaction/CallToAction';
import Partnership from './components/partners/Partnership';

import Services from "./components/containers/services/services"

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <CallToAction></CallToAction>
        <Services />
        <footer id="partner">
          <Partnership/>
        </footer>
      </div>
    );
  }
}

export default App;
