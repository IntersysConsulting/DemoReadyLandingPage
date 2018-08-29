import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'
import './Header.css';
import logo from '../../assets/images/intersys-logo.png';

const header = () => (
        <Navbar brand={<img href="/" alt="navbar logo" className="navbar_logo" src={logo} />} className='navbar_intersys' right>
            <NavItem href='#call-to-action'><Icon>home</Icon></NavItem>
            <NavItem href='#demos'>Demos</NavItem>
            <NavItem href='#partner'>Partnership</NavItem>
            <NavItem href='https://www.intersysconsulting.com/company/'>About Us</NavItem>
        </Navbar>
);

export default header;