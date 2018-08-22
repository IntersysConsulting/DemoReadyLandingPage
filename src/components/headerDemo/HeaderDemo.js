import React, { Component } from 'react';
import { NavItem, Icon, Link, SideNavItem} from 'react-materialize'
import './HeaderDemo.css';
import logo from '../../assets/images/intersys-image.png';
import { getUrl, getLocation } from '../../../src/utils.js'
import Sidenav from '../../components/sidenav/sidenav'
import Navbar from '../../components/navbar/Navbar'

let locationKeywords = getLocation();
let currentPath = getUrl()

class HeaderDemo extends Component {
    constructor(props) {
        super(props)
    }


    cleanUrl = () => {
        let currentPath = getUrl()
        let arrPath = (currentPath.pathname.split('/'))
        let path = arrPath.filter(word => word.length > 0)
        
        if (path.length > 3) {
            path.pop()
        }

        return path.join('/')
    }    

    render() {
        return [
            <div class="header">
                <Navbar brand={ <img href="/" className="navbar_logo" src={logo} /> } className='navbar_intersys' right >
                    <NavItem className="home-icon" href='/'><Icon>home</Icon></NavItem>
                    <NavItem className="study" href={'/' + this.cleanUrl() + '/case'}><span>Case</span><Icon className="study-icon"></Icon></NavItem>
                    <NavItem className="demo-video" href={'/' + this.cleanUrl() + '/demo'} src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"><span>Demo</span><Icon className="demo-icon"></Icon></NavItem>
                    <NavItem className="credits" href={'/' + this.cleanUrl() + '/credits'}><span>Credits</span><Icon className="credits-icon"></Icon></NavItem>
                    <NavItem className="stack" href={'/' + this.cleanUrl() + '/tech'}><span>Tech Stack</span><Icon className="stack-icon"></Icon></NavItem>
                </Navbar>  
                 
            </div>
        ]
    }
}

export default HeaderDemo;