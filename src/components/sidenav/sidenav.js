import React, { Component } from 'react';
import { SideNavItem, SideNav } from 'react-materialize'
import './sidenav.css';
import { createPortal } from 'react-dom'

import { getCurrentCategory, getDemosByCategory } from '../../../src/utils.js' 

class Sidenav extends Component {
    constructor(props) {
        super(props)

    }
    
    createSidenavItems = () => {
        let category = getCurrentCategory()
        let demos = getDemosByCategory(category)
        let categories = []

        for (let i = 0 ; i < demos[0].length; i++) {
            categories.push(demos[0][i])
        }

        const listItems = categories.map((demo) =>
            <SideNavItem href={`/demo-page/${category}/${demo.id}`}>{demo.name}</SideNavItem>
        );
        
        return listItems
    }

    render() {
        let content = (
            <div className={`sidenavParent ${this.props.isOpen ? 'open' : ''}`}>
                <div className="overlay" onClick={e => this.props.toggle() }></div>
                <ul className={`sidenav`}>
                    <SideNavItem header className='sidenav-header'>Categories</SideNavItem>
                    <SideNavItem divider />
                    {this.createSidenavItems()}
                </ul>
            </div>

        )


        return createPortal(content, document.getElementsByTagName('body')[0])
    }
}

export default Sidenav;