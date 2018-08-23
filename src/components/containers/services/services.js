import React, {Component} from 'react'

import "./services.css";

import {connect} from 'react-redux';

import {Row, Container} from 'react-materialize';

import Cardboard from "./../cards/CardBoard";
import Categories from "./../../categories/categories";
import CategoriesInfo from "./../../categoriesInfo/categoriesInfo";
import ResponsiveCategories from './../../responsiveCategories/responsiveCategories';

class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      selectedCategoryIndex: 0
    }
  }

  handleResize = () => {
    const windowWidth = window.innerWidth;
    this.setState({windowWidth})
  }

  selectCategory = (index) => {
    this.setState({selectedCategoryIndex: index})
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const {windowWidth, selectedCategoryIndex} = this.state;

    if (!this.props.data || this.props.data.length === 0)
      return null

    const selectedCategory = this.props.data[selectedCategoryIndex];

    if (windowWidth > 768) {
      return (
        <Row>
          <div id='demos' className="services row">
            <Categories data={this.props.data} selectCategory={this.selectCategory}/>
            <CategoriesInfo
              description={selectedCategory.description}
              name={selectedCategory.name}/>
          </div>
          <Cardboard cardData={selectedCategory.cardboard}/>
        </Row>
      )
    } else {
      return (
        <Row>
          <Container>
            <ResponsiveCategories
              data={this.props.data}
              selectCategory={this.selectCategory}/>
          </Container>
        </Row>
      )
    }
  }
}

const mapStateToProps = state => ({data: state.services})

export default connect(mapStateToProps)(Services);