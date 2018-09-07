import React from "react";
import { Navbar, NavItem, Icon } from 'react-materialize';
import './../header/Header.css';
import Footer from './../footer/footer';
import './NotFound.css';
import logo from '../../assets/images/intersys-logo.png';

export default () => (
    <div className='not-found'>
    <Navbar brand={<img href="/" alt="navbar logo" className="navbar_logo" src={logo} />} className='navbar_intersys' right>
            <NavItem href='/'><Icon>home</Icon></NavItem>
            <NavItem href='https://www.intersysconsulting.com/company/'>About Us</NavItem>
        </Navbar>
        <div className="text-wrapper">
            <div className="title" data-content="404">
                404
            </div>

            <div className="subtitle">
                Oops, the page you're looking for doesn't exist.
            </div>

            <div className="buttons">
                <a className="button" href="/">Go to homepage</a>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
  );