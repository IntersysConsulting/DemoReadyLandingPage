import React, {Component} from 'react';
import {NavItem, Icon} from 'react-materialize'
import './HeaderDemo.css';
import logo from '../../assets/images/intersys-image.png';
import Navbar from '../../components/navbar/Navbar'
import {withRouter} from 'react-router-dom'

class HeaderDemo extends Component {
    cleanUrl = () => {
        const {category, demoId} = this.props.match.params;

        return `demo-page/${category}/${demoId}`
    }

    render() {
        return [
        <div className = "header" > <Navbar
            brand={< img alt="navbar_logo" href="/" className="navbar_logo" src = {
            logo
        } />}
            className='navbar_intersys'
            right>
            <NavItem className="home-icon" href='/'>
                <Icon>home</Icon>
            </NavItem>
            <NavItem className="study" href={'/' + this.cleanUrl() + '/case'}>
                <span>Case</span>
                <Icon className="study-icon"></Icon>
            </NavItem>
            <NavItem
                className="demo-video"
                href={'/' + this.cleanUrl() + '/demo'}
                src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0">
                <span>Demo</span>
                <Icon className="demo-icon"></Icon>
            </NavItem>
            <NavItem className="credits" href={'/' + this.cleanUrl() + '/credits'}>
                <span>Credits</span>
                <Icon className="credits-icon"></Icon>
            </NavItem>
            <NavItem className="stack" href={'/' + this.cleanUrl() + '/tech'}>
                <span>Tech Stack</span>
                <Icon className="stack-icon"></Icon>
            </NavItem>
        </Navbar> </div>
        ]
    }
}

export default withRouter(HeaderDemo);