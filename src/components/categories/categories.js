import React from 'react'

import "./categories.css";

export default (props) => {
  return (
    <div className="categories col s12 m6">
      {
        props.data.map((category,index) => {
          return (
          <div
          key={index}
          className="categories__single-category col s12 m4 center-align"
          onClick={()=> props.selectCategory(index)}>
            <img
            className="categories__image"
            src={require(`./../../assets/svg/${category.image}.svg`)}
            alt={category.name} />
            <h3 className="categories__title">{category.name}</h3>
          </div>)
        })
      }
    </div>
  )
}
