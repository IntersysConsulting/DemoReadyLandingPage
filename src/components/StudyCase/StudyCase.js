import React, {Component} from 'react';
import './StudyCase.css';
import {Document, Page} from 'react-pdf';
import {KEY_UP, KEY_RIGHT, KEY_DOWN, KEY_LEFT} from 'keycode-js'
import {Icon} from 'react-materialize'

const styles = ({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

class StudyCase extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  }

  increasePageNum = () => {
    if (this.state.pageNumber + 1 > this.state.numPages)
      return
    this.setState({
      pageNumber: this.state.pageNumber + 1
    })
  }

  decreasePageNum = () => {
    if (this.state.pageNumber - 1 <= 0)
      return
    this.setState({
      pageNumber: this.state.pageNumber - 1
    })
  }

  onDocumentLoad = ({numPages}) => {
    this.setState({numPages});
  }

  handleKeyDown = (event) => {
    event.preventDefault();
    const {keyCode} = event;

    switch (keyCode) {
      case KEY_UP:
      case KEY_RIGHT:
        {
          this.increasePageNum()
          break;
        }
      case KEY_DOWN:
      case KEY_LEFT:
        {
          this.decreasePageNum()
          break;
        }
      default:
        return
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown')
  }

  render() {
    const {pageNumber, numPages} = this.state;

    return (
      <div className="study-case row">
        <Document
          scale="1.0"
          file={this.props.description}
          onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} style={styles.section}/>

          <button id='decrease-btn' onClick={this.decreasePageNum}>
            <Icon>arrow_back_ios</Icon>
          </button>

          <button id='increase-btn' onClick={this.increasePageNum}>
            <Icon>arrow_forward_ios</Icon>
          </button>
        </Document>
        <p>Page {pageNumber}
          of {numPages}</p>
      </div>
    );
  }
}

export default StudyCase;