import React, { Component } from 'react';
import {markdown} from 'markdown';
import './App.css';
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from './components/MarkdownPreview';
import ReactMarkdown from 'react-markdown';

const exampleTxt = `
  # Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal

`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {textInput: exampleTxt};

    this.handleChange = this.handleChange.bind(this);
    this.displayMarkdownText = this.displayMarkdownText.bind(this);
  }
  handleChange(event){
    this.setState({
      textInput: event.target.value
    })
  }
  render() {
    return <div className="App">
        <MarkdownEditor
          onChange={this.handleChange}
          placeholder={exampleTxt}
        />
        <ReactMarkdown
          className="result"
          source={this.state.textInput}
          skipHtml={'skip'}
        />
      </div>;
  }
}

export default App;
