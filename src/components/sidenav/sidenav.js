import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {createPortal} from 'react-dom'

import {
  SideNavItem,
  Collapsible,
  CollapsibleItem,
  Collection,
  CollectionItem,
  Icon
} from 'react-materialize'

import './sidenav.css'

class Sidenav extends Component {
  createSideNavMenuItem = ({name, cardboard}) => (
    <SideNavItem key={name}>
      <Collapsible>
        <CollapsibleItem header={name}>
          {cardboard.length > 0 && (
            <Collection>
              {cardboard.map((demo, i) => <CollectionItem key={i} href={demo.linkTo}>
                {demo.title}
              </CollectionItem>)}
            </Collection>
          )
}
        </CollapsibleItem>
      </Collapsible>
    </SideNavItem>
  )

  render() {
    console.log(this.props)
    let content = (
      <div
        className={`sidenavParent ${this.props.isOpen
        ? 'open'
        : ''}`}>

        <div
          className="overlay"
          onClick={() => this
          .props
          .toggle()}></div>

        <ul className={`sidenav`}>
          <div className='sidenavHeader'><h1>CATEGORIES</h1>
            <div className='sidenav__close' onClick={() => this
            .props
            .toggle()}>
              <Icon className=''>close</Icon>
            </div>
          </div>
          {this
            .props
            .categories
            .map(category => {
              if(category.cardboard.length > 0){
               return this.createSideNavMenuItem(category);
              }
            }
            )}
        </ul>
      </div>
    )
    return createPortal(content, document.getElementsByTagName('body')[0])
  }
}

const mapStateToProps = ({demos, categories}) => ({demos, categories})

export default withRouter(connect(mapStateToProps)(Sidenav));