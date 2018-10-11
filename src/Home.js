import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PostLink from './PostLink';

class Home extends Component {
  static initialState = {
    posts: [{
      id: 1,
      fields: {
        featuredImage: '',
        title: 'welcome to content site'
      }
    }]
  }
  constructor(props){
    super(props);
    this.state = Home.initialState;
  }

  render() {
    let imgSrc = null;
    return (
      <div className="cards">
        <Helmet title="Contentful Static React" />
        {this.state.posts &&
          this.state.posts.map(post => {
            if (post.fields.featuredImage) {
              imgSrc = post.fields.featuredImage;
            }
            return (
              <PostLink
                key={post.id}
                to={post.id}
                src={imgSrc}
                title={post.fields.title}
              />
            );
          })}
      </div>
    );
  }
}

export default Home;
