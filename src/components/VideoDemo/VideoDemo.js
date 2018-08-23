import React from 'react';
import './VideoDemo.css';
import video from './../../assets/videos/storage-and-compute.mp4'
const videoDemoPath = (src) => {
  return import(`./../../assets/videos/${src}.mp4`).then(val => {return val.toString()});
}

const videoDemo = (props) => (
  <div class="demo video-container">
    <video id="video-demo" width="100%" height="100%" controls src={video} type="video/mp4"/>
  </div>
);

export default videoDemo;