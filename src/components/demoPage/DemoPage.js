import React, { Component } from 'react';
import HeaderDemo from '../headerDemo/HeaderDemo';
import VideoDemo from '../VideoDemo/VideoDemo';
import StudyCase from '../StudyCase/StudyCase';
import Credits from '../credits/Credits';
import TechStack from '../techStack/TechStack';
import { getDemoById } from '../../../src/utils.js';

import './DemoPage.css';

class DemoPage extends Component {
    
    constructor(props) {
        super(props)
        const {category, demoId, component} = this.props.match.params
        let demoData = getDemoById(category, demoId)
        this.state = {
            renderedComponent: this.buildComponent(component, demoData)
        }  
    }

    buildComponent = (component, data) => {
        if(component){
           switch(component){
               case "demo":
                return <VideoDemo/>
               case "case":
                return <StudyCase description={data.content.studyCase} />
               case "credits":
                return <Credits/>
               case "tech":
                return <TechStack/>
              default:
                return <h1>No component tu render</h1>  
           } 
        }
    }

    render() {
        return(
            <div>
                <HeaderDemo></HeaderDemo>
                {this.state.renderedComponent}
            </div>
        );
    }
}

export default DemoPage;