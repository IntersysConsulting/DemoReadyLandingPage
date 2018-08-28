import React, {Component} from 'react';
import {Button} from 'react-materialize';
import './CallToAction.css'

class CallToAction extends Component {
  render() {
    return (
      <div className="banner row">
        <div className="col s12 m6">
          <div className="video-container">
          <iframe allowtransparency="true" 
            title="Wistia video player" 
            allowFullscreen 
            frameborder="0"
            scrolling="no" 
            class="wistia_embed" 
            name="wistia_embed" 
            src="https://fast.wistia.net/embed/iframe/rynly62q1d" 
            width="400" 
            height="225">
          </iframe>
          </div>
        </div>
        <div className="banner__text-container col s12 m6">
          <h2>Let's do
            <b>
              Business</b>
          </h2>
          <div className="banner__underline"></div>
          <div className="banner__paragraph">
          Intersys sits at the cross-section of Data and Digital Transformation providing a suite of services to uniquely support them as one cohesive strategy/solution.
          </div>
          <div>
            <Button node='a' href='https://www.intersysconsulting.com/services/#servicescontactus' className='banner__btn'>
              Go</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;