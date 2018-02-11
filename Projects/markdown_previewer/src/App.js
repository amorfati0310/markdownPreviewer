import React, { Component } from 'react';
import {markdown} from 'markdown';
import './App.css';
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from './components/MarkdownPreview';
const ReactMarkdown = require('react-markdown');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {textInput: ''};

    this.handleChange = this.handleChange.bind(this);
    this.displayMarkdownText = this.displayMarkdownText.bind(this);
  }
  handleChange(event){
    this.setState({
      textInput: event.target.value
    })
    this.displayMarkdownText(this.state.textInput)
  }
  displayMarkdownText(text){
    console.log(markdown.toHTML(text))
    return markdown.toHTML(text);
  }
  render() {
    return <div className="App">
        <MarkdownEditor onChange={this.handleChange}/>
        <ReactMarkdown
          className="result"
          source={this.state.textInput}
          skipHtml={'skip'}
        />
      </div>;
  }
}

export default App;
