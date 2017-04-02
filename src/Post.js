import React, { Component } from 'react';
import './App.css';


class Post extends Component {
  render() {
    return (
      <div>
        <img className="picture-profile" src={this.props.attributes.pic}/>
      </div>
    )
  }
}

export default Post;
