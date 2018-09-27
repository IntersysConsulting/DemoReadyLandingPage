import React from 'react';
import './Credits.css';
import Row from '../../../node_modules/react-materialize/lib/Row';
import { Col, Card, CardTitle} from 'react-materialize'
import './consultantCard.css'
import {addRepoName} from '../../../src/utils'

const credits = ({credits}) => (
            <div>
                <div className='credits-center'>
                    <Row>
                        {credits.map(credits=>(
                            <Col s={12} m={6} l={4}>
                                <Card horizontal header={<CardTitle image={addRepoName(`/img/consultants/${credits.photo}`)}></CardTitle>} className='hoverable' actions={[<a href={credits.bioLink}>Go to Bio</a>]}>
                                <h1>{credits.consultantName}</h1>
                                <h2>{credits.role}</h2>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

        );

export default credits;