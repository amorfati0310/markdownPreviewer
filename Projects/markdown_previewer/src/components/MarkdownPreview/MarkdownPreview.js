import React, { Component } from 'react';

class MarkdownPreview extends Component {
    render(){
        return (
            <div>
              {this.props.markdownText}
            </div>
        )
    }
}

export default MarkdownPreview
