import React from 'react';
import './StudyCase.css';

const studyCase = ({description}) =>(
      <div> 
        <img src={description} alt="studycase" className="img"/>
      </div>
    );

export default studyCase;