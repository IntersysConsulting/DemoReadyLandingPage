import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import HeaderDemo from '../headerDemo/HeaderDemo'
import VideoDemo from '../VideoDemo/VideoDemo'
import StudyCase from '../StudyCase/StudyCase'
import Credits from '../credits/Credits'
import TechStack from '../techStack/TechStack'

import './DemoPage.css';

class DemoPage extends Component {

    constructor(props) {
        super(props)
        const {category, demoId, component} = props.match.params;
        const {demos} = props
            .demos
            .find(demo => demo.id === category)

        this.state = {
            renderedComponent: this.buildComponent(component, demos.find(demo => demo.id === demoId))
        }
    }

    buildComponent = (component, data) => {
        if (component) {
            switch (component) {
                case "demo":
                    return <VideoDemo demoSrc={data.content.demo}/>
                case "case":
                    return <StudyCase description={data.content.studyCase}/>
                case "credits":
                    return <Credits/>
                case "tech":
                    return <TechStack/>
                default:
                    return <h1>No component to render</h1>
            }
        }
    }

    render() {
        return (
            <div>
                <HeaderDemo/> {this.state.renderedComponent}
            </div>
        );
    }
}

const mapStateToProps = ({demos}) => ({demos})

export default withRouter(connect(mapStateToProps)(DemoPage))