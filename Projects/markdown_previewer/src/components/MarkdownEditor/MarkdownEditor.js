import React, { Component } from 'react';
import { markdown } from 'markdown';
import "./MarkdownEditor.css";


class MarkdownEditor extends Component {
  render(){
    return (
      <div className="textarea-container">
        <textarea rows="4" cols="50" onChange={this.props.onChange} placeholder={this.props.placeholder}/>
      </div>
    )
  }
}


export default MarkdownEditor;
