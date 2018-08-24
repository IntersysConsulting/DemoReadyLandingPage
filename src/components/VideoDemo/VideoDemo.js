import React from 'react';
import './VideoDemo.css';

const videoDemo = ({video}) => (
  <div className="demo video-container">
    <video id="video-demo" width="100%" height="100%" controls src={video} type="video/mp4"/>
  </div>
)


export default videoDemo;