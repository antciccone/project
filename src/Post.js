import React, { Component } from 'react';
import './App.css';


class Post extends Component {
  formatName(name){
    return name.split('.').join(' ')
  }
  render() {
    const post = this.props.attributes
    return (
      <div>
        <div className="content">
          <img alt="" className="picture-profile" src={post.pic}/>
          <h3>{post.message}</h3>
        </div>
        <h3 className="name">{this.formatName(post.username)}</h3>
        <h3 className='user-agent'>{post.useragent}</h3>
        <p className="date">{post.date}</p>
      </div>
    )
  }
}

export default Post;
