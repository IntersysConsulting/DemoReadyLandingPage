import React, {Component} from 'react';
import {NavItem, Icon} from 'react-materialize'
import './HeaderDemo.css';
import logo from '../../assets/images/intersys-image.png';
import Navbar from '../../components/navbar/Navbar'
import {withRouter} from 'react-router-dom'
import {addRepoName} from '../../../src/utils'

class HeaderDemo extends Component {
    cleanUrl = () => {
        const {category, demoId} = this.props.match.params;

        return addRepoName(`/demo-page/${category}/${demoId}`);
    }

    render() {
        const home = addRepoName("/");
        const url_clean = this.cleanUrl();
        return [
            
        <div className = "header" > <Navbar
            brand={< img alt="navbar_logo" className="navbar_logo" src = {logo} />}
            href={home}
            className='navbar_intersys'
            right>
            <NavItem className="home-icon" href={home}>
                <Icon>home</Icon>
            </NavItem>
            <NavItem className="study" href={url_clean + '/case'}>
                <span>Case</span>
                <Icon className="study-icon"></Icon>
            </NavItem>
            <NavItem
                className="demo-video"
                href={url_clean + '/demo'}
                src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0">
                <span>Demo</span>
                <Icon className="demo-icon"></Icon>
            </NavItem>
            <NavItem className="credits" href={url_clean + '/credits'}>
                <span>Credits</span>
                <Icon className="credits-icon"></Icon>
            </NavItem>
            <NavItem className="stack" href={url_clean + '/tech'}>
                <span>Tech Stack</span>
                <Icon className="stack-icon"></Icon>
            </NavItem>
        </Navbar> </div>
        ]
    }
}

export default withRouter(HeaderDemo);