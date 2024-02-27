import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';
import { Link } from 'react-router-dom';


interface tweetPropts {
  content: string
}


export function Tweet(prop: tweetPropts) {
  return(
    <Link className="tweet" to="/status">
      <img src="https://github.com/duhnunes.png" alt="Duh Nunes" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>DuH Nunes</strong>
          <span>@duhnunes</span>
        </div>

        <p>{prop.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
        
      </div>
    </Link>
  )
}