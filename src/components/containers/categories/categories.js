import React, {Component} from 'react'

import {connect} from 'react-redux'

import {Row, Col, Tabs, Tab} from 'react-materialize'
import DemoCard from './../../card/DemoCard'

import './categories.css'

const defaultCategory = 'bigdata'

const createTab = (category) => (
  <Tab
  active={category.name === defaultCategory}
  title={category.name}
  className='categories__tab'>
  <Row className="categories__container">
    <div className="categories__info">
      <h1 className="categories__title">
        {category.name}
      </h1>
      <div className="categories__underline"></div>
      <p className="categories__description">
        {category.description}
      </p>
    </div>
    <div className="categories__cardboard">
      <Row>
        {createCarboard(category.cardboard)}
      </Row>
    </div>
  </Row>
</Tab>
)

const createCarboard = (cardboard) => (cardboard.map((card, index) => (
  <Col s={4} m={4}>
    <DemoCard
      key={index}
      image={card.image}
      title={card.title}
      description={card.description}
      linkTo={card.linkTo}
      linkText={card.linkText}/>
  </Col>
)))

class Categories extends Component {
  render() {
    return (
      <Row>
        <Tabs className="categories__tabs z-depth-1">
          {this
            .props
            .categories
            .map(category => (
              createTab(category)
            ))}
        </Tabs>
      </Row>
    )
  }
}

const mapStateToProps = state => ({categories: state.categories})

export default connect(mapStateToProps)(Categories);