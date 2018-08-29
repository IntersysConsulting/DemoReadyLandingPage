import React, { Component } from 'react';
import './StudyCase.css';
import { Document, Page } from 'react-pdf';
import { KEY_UP,KEY_RIGHT,KEY_DOWN,KEY_LEFT} from 'keycode-js'
import 'react-pdf/dist/Page/AnnotationLayer.css';


class StudyCase extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  handleKeyDown = (event) => {
    event.preventDefault();
    const {keyCode} = event;

    switch(keyCode){
      case KEY_UP:
      case KEY_RIGHT :{
        if(this.state.pageNumber + 1 > this.state.numPages)
          return
        this.setState({
          pageNumber : this.state.pageNumber + 1
        })
        break;
      }
      case KEY_DOWN:
      case KEY_LEFT :{
        if(this.state.pageNumber - 1 <= 0)
          return
        this.setState({
          pageNumber : this.state.pageNumber - 1
        })
        break;
      }
      default:
      return
    }
  }

  componentDidMount(){
    window.addEventListener('keydown',this.handleKeyDown)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown')
  }

  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
      <div className="container">
        <Document rotate="0"
          file={this.props.description}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page className="" pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="row case-footer">
        <p>Page {pageNumber} of {numPages}</p>
      </div></div>
    );
  }
}

export default StudyCase;