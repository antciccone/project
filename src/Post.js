import React, { Component } from 'react';
import './App.css';
import Moment from 'react-moment';


class Post extends Component {
  formatName(name){
    return name.split('.').join(' ').replace(/[0-9]/g, '')
  }

  formatDate(date){
    return date
  }
  render() {
    const post = this.props.attributes
    return (
      <div className="container">
        <div className='content'>
          <img alt='' className='picture-profile' src={post.pic}/>
          <h3>{post.message}</h3>
        </div>
        <h3 className='name'>{this.formatName(post.username)}</h3>
        <h3 className='user-agent'>{post.useragent}</h3>
        <Moment className='date'>{post.date}</Moment>
    )
  }
}

export default Post;
