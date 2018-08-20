import React from 'react';
import './VideoDemo.css';

const videoDemo = (props) => (
  <div class="demo video-container">
    <video width="100%" height="100%" controls="true">
        <source src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" type="video/mp4" />
      </video>
  </div>
);

export default videoDemo;