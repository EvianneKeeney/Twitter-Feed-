import React from 'react';
import Tweet from './Tweet'

class TwitterFeed extends React.Component{
  constructor(props){
    super(props);
  }

  render() {


    let tweets = this.props.data.map((tweet)=>{

      return(
        <div>
          < Tweet
            key = {tweet.id_str}
            text = {tweet.text}
            username = {tweet.user.name}
            userscreenname = {tweet.user.screen_name}
            date = {tweet.timestamp_ms}
            image = {tweet.user.profile_image_url}
            retweets = {tweet.retweet_count}
            favorites = {tweet.favorite_count}
            favorited = {tweet.favorited}
            retweeted = {tweet.retweeted}
          />
        </div>
      )}
    )

    return(
  
      <blockquote>
      {tweets}
      </blockquote>
    )
  }
}



export default TwitterFeed;
