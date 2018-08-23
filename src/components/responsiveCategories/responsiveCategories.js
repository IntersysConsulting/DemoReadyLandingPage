import React from 'react'

import {Row, Col, Collapsible, CollapsibleItem} from 'react-materialize';

const ResponsiveCategories = (props) => {
  return (
    <Collapsible
    accordion={true}
    popout={true}
    >
      {props
        .data
        .map((category,index) => {
          return (
            <CollapsibleItem
              key={index}
              header={category
              .name
              .toUpperCase()}>
              <Row>
                <Col s={12} className="center-align">
                  <img
                    className="categories__image"
                    src={require(`./../../assets/svg/${category.image}.svg`)}
                    alt={category.name}/>
                </Col>
              </Row>
              <Row>
                <Col s={12}>
                  {category.description}
                </Col>
              </Row>
            </CollapsibleItem>
          )
        })
}
    </Collapsible>
  )
}

export default ResponsiveCategories;