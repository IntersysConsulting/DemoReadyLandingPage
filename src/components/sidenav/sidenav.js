import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import {SideNavItem} from 'react-materialize'
import './sidenav.css';
import {createPortal} from 'react-dom'
import {addRepoName} from '../../../src/utils'

class Sidenav extends Component {
    createSidenavItems = () => {
        const {category} = this.props.match.params;

        const {demos} = this
            .props
            .demos
            .find(demo => demo.id === category);

        return demos.map(demo => (
            <SideNavItem key={demo.id} href={addRepoName(`/demo-page/${category}/${demo.id}/case`)}>
                {demo.name}
            </SideNavItem>
        ));
    }

    render() {
        let content = (
            <div
                className={`sidenavParent ${this.props.isOpen
                ? 'open'
                : ''}`}>
                <div
                    className="overlay"
                    onClick={e => this
                    .props
                    .toggle()}></div>
                <ul className={`sidenav`}>
                    <SideNavItem className='sidenav-header'>Demos</SideNavItem>
                    <SideNavItem divider/> {this.createSidenavItems()}
                </ul>
            </div>

        )

        return createPortal(content, document.getElementsByTagName('body')[0])
    }
}

const mapStateToProps = ({demos}) => ({demos})

export default withRouter(connect(mapStateToProps)(Sidenav));