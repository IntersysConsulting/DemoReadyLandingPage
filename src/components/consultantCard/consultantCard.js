import React, { Component } from 'react';
import './consultantCard.css'
import profile from './../../assets/images/img-profile.jpg'
import { Col, Card, CardTitle} from 'react-materialize'

class ConsultantCard extends Component {
    
    render() {
        return [
            <Col s={12} m={6} l={5}>
                <Card horizontal header={<CardTitle image={profile}></CardTitle>} className='hoverable' actions={[<a href='#'>Go to Bio</a>]}>
                    <h1>Consultant Name</h1>
                    <h2>Contribution to the project</h2>
                </Card>
            </Col>
           
        ]
    }
    
}

export default ConsultantCard;