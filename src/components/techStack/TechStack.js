import React from 'react';
import './TechStack.css';
import {Col, Row} from 'react-materialize';
import reactLogo from "./../../assets/images/stack/react.png";
import htmlLogo from "./../../assets/images/stack/html5.png";
import cssLogo from "./../../assets/images/stack/css.png";
import jsLogo from "./../../assets/images/stack/js-logo.png";
import materializeLogo from "./../../assets/images/stack/materialize.jpg";
import reactD3 from "./../../assets/images/stack/react-d3.png";
import primereact from "./../../assets/images/stack/primereact.png";
import docker from "./../../assets/images/stack/docker.png";
import github from "./../../assets/images/stack/github.png";


const techStack = (props) => (
             <div className='center'>
                <Row>
                    <Col s={12} m={12} l={2} className='stack-title'><div>Web</div></Col>
                    <Col s={12} m={12} l={10} className='logos'>
                        <div className='stack-logo'><img src={reactLogo} ></img></div>
                        <div className='stack-logo'><img src={htmlLogo} ></img></div>
                        <div className='stack-logo'><img src={cssLogo} ></img></div>
                        <div className='stack-logo'><img src={jsLogo} ></img></div>
                        <div className='stack-logo'><img src={materializeLogo}></img></div>
                        <div className='stack-logo'><img src={primereact}></img></div>
                        <div className='stack-logo'><img src={reactD3}></img></div>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={12} l={2} className='stack-title'><div>Infra</div></Col>
                    <Col s={12} m={12} l={10} className='logos'>
                        <div className='stack-logo'><img src={docker}></img></div>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={12} l={2} className='stack-title'><div>Collaboration</div></Col>
                    <Col s={12} m={12} l={10} className='logos'>
                        <div className='stack-logo'><img src={github}></img></div>
                    </Col>
                </Row>
            </div>
        );

export default techStack;