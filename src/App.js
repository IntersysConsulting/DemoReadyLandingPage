import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import CallToAction from './components/calltoaction/CallToAction';
import Partnership from './components/partners/Partnership';
import Footer from './components/footer/footer'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div>
      <Header categories={this.props.categories}></Header>
      <CallToAction></CallToAction>
      <footer id="partner">
        <Partnership/>
        <Footer/>
      </footer>
    </div> 
    );
  }
}

const mapStateToProps = state => ({categories: state.services})

export default withRouter(connect(mapStateToProps)(App))