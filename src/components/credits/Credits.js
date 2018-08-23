import React from 'react';
import './Credits.css';
import ConsultantCard from '../consultantCard/consultantCard'
import Row from '../../../node_modules/react-materialize/lib/Row';


const credits = (props) => (
            <div>
                <div className='center'>
                    <Row>
                        <ConsultantCard ></ConsultantCard>
                        <ConsultantCard></ConsultantCard>
                    </Row>
                </div>
            </div>

        );

export default credits;