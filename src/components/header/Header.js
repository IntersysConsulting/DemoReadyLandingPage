import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'
import './Header.css';
import logo from '../../assets/images/intersys-logo.png';

let buildHeaderItems = function(categories){
    var _categories = categories.map(category =>
        <NavItem href={`/${category.id}`}>{category.name}</NavItem>
    );

    return _categories;
}

const header = (props) => (
    <div>
        <Navbar brand={<img href="/" alt="navbar logo" className="navbar_logo" src={logo} />} className='navbar_intersys' right>
            <NavItem href='/'><Icon>home</Icon></NavItem>
            {buildHeaderItems(props.categories)}
        </Navbar>
    </div>
);

export default header;