import React from 'react';
import './StudyCase.css';

const studyCase = ({description}) =>(
      <div> 
        <img src={description} className="img"/>
      </div>
    );

export default studyCase;