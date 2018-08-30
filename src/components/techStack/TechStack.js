import React from 'react';
import './TechStack.css';
import {Col, Row} from 'react-materialize';



const techStack = ({stack}) => (
    
            <div className='center'>
            {stack.map(stack=> (
                <Row>
                    <Col s={12} m={12} l={12} className='stack-bar hoverable'>
                        <div className='stack-title'>{stack.name}</div>
                        {!stack.tech ? null : stack.tech.map(img => (
                            <div className='stack-logo'><img src={`/img/stack/${img}`} ></img></div>
                        ))}
                    </Col>
                </Row>
            ))}
            </div>
        );

export default techStack;