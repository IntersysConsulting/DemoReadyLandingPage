import React, { Component } from 'react';
import HeaderDemo from '../../components/headerDemo/HeaderDemo'
import './VideoDemo.css';
import DemoPage from '../demoPage/DemoPage';
//import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class VideoDemo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //const { match: { params } } = this.props;
        console.log(this.props)
    }

    render() {
        // TO-DO src should be rendered from props
        return [
            <div class="video-container">
                <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
        ]
    }
}

export default VideoDemo;