import React from 'react';
import { Parallax } from 'react-materialize';
import './StudyCase.css';

const studyCase = (props) =>(
      <div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div className="section white">
          <div className="row container">
            <h2 className="header">Study Case</h2>
            <p className="grey-text text-darken-3 lighten-3">{props.description}</p>
          </div>
        </div>
      </div>
    );

export default studyCase;