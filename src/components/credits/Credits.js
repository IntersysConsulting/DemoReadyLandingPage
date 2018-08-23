import React from 'react';
import './Credits.css';
import DemoPage from '../demoPage/DemoPage';
import ConsultantCard from './consultantCard'
import edgarMunoz from './../../assets/images/consultants/edgar-munoz.JPG'
import davidBarriga from './../../assets/images/consultants/david-barriga.JPG'
import gustavoMejia from './../../assets/images/consultants/gustavo-mejia.JPG'
import Row from '../../../node_modules/react-materialize/lib/Row';
import { Col, Card, CardTitle} from 'react-materialize'
import './consultantCard.css'

const credits = (props) => (
            <div>
                <div className='credits-center'>
                    <Row>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={edgarMunoz}></CardTitle>} className='hoverable' actions={[<a href='#'>Go to Bio</a>]}>
                                <h1>Edgar Muñoz</h1>
                                <h2>Web Developer</h2>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={davidBarriga}></CardTitle>} className='hoverable' actions={[<a href='#'>Go to Bio</a>]}>
                                <h1>David Barriga</h1>
                                <h2>UI Developer</h2>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={gustavoMejia}></CardTitle>} className='hoverable' actions={[<a href='#'>Go to Bio</a>]}>
                                <h1>Gustavo Mejia</h1>
                                <h2>Project Supervisor</h2>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            
        ); 

export default credits;