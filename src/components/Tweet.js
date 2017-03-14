import React from 'react';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <blockquote>

      <p><img src={this.props.image} height="100" width="100"/>
      {this.props.username}
      @{this.props.userscreenname}
      {this.props.date}</p>
      <p>{this.props.text}</p>
       <p>{this.props.retweets} {this.props.favorites}</p>
      </blockquote>
    )

  }
};

export default Tweet;
