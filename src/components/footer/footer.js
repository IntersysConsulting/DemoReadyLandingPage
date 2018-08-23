import React, { Component } from 'react';
import './footer.css';
import {Footer} from 'react-materialize'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

class Credits extends Component {
    render() {
        return(
            <Footer copyrights='© 2018 Intersys Consulting, Inc. All Rights Reserved.'
            links={
                <ul className='social-media'>
                    <li><a href='https://www.facebook.com/IntersysConsulting'><FaFacebookSquare /></a></li>
                    <li><a href='https://twitter.com/IntersysConsult'><FaTwitterSquare /></a></li>
                    <li><a href='https://www.linkedin.com/company/intersys-consulting-inc-'><FaLinkedin /></a></li>

                </ul>

            }
            >
            <ul className='footer-links'>
                <li><a className="grey-text text-lighten-3" href="https://www.intersysconsulting.com/company">Company</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.intersysconsulting.com/company/partners">Partners</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.intersysconsulting.com/company/privacy-policy-terms-use">Privacy Policy & Terms of Use</a></li>
            </ul>
            </Footer>
        );
    }
}

export default Credits;