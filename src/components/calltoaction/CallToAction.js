import React, {Component} from 'react';
import {Button} from 'react-materialize';
import './CallToAction.css'

class CallToAction extends Component {
  render() {
    return (
      <div className="banner row">
        <div className="col s12 m6">
          <div className="video-container">
            <iframe
              title='Lets Do Business'
              height='295'
              width='540'
              src="https://www.youtube.com/embed/SNoK5pyK73c?rel=0"
              allowFullScreen></iframe>
          </div>
        </div>
        <div className="banner__text-container col s12 m6">
          <h2>Let's do
            <b>
              Business</b>
          </h2>
          <div className="banner__underline"></div>
          <div className="banner__paragraph">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam cursus, est ac aliquam faucibus, quam lacus viverra mi,
            sed porta tellus est id nisi. Cras velit diam, fermentum a nibh vel, dapibus
            pellentesque justo. Nunc malesuada risus eget purus interdum volutpat.</div>
          <div>
            <Button node='a' href='#' className='banner__btn'>
              Go</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;