import React from 'react';
import './VideoDemo.css';

const videoDemo = (props) => (
  <div class="demo video-container">
    <iframe width="100%" height="100%" allowFullScreen src={props.demoSrc}></iframe>
  </div>
);

export default videoDemo;