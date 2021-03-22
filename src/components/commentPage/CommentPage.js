import { useHistory } from 'react-router-dom'
import { useState } from "react"
import CommentModal from './CommentModal'
import Comments from "./Comments"
import './commentPage.css'

const CommentPage = ({ bio, selectedTweet }) => {
  const [commentModalDisplay, setCommentModal] = useState(false)
  const { goBack } = useHistory()
  return (
    <div className="comment-page">
      <div className="header">
        <button onClick={() => goBack()}><i className="material-icons">&#xe5c4;</i></button>
        <span>Tweet</span>
      </div>
      <div className="tweet-content">
        <div>
          <img src={bio.profilePhoto} className="home-page-photo" alt="user-profile" />
          <strong className="user-profile-name">{bio.name}</strong>
          <button><i className="material-icons">&#xe5d3;</i></button>
        </div>
        <div>
          <p className="tweet-text">{selectedTweet.tweetText}</p>
          <p id="time">2:51pm. Feb 15, 2021. Twitter Web App</p>
        </div>
        <div className="tweet-interaction">
          <span><strong>42 </strong>Retweets</span>
          <span><strong>12 </strong>Quote Tweets</span>
          <span><strong>675 </strong>Likes</span>
        </div>
        <div className="user-tweet-options">
          <button
            title="Reply"
            onClick={() => setCommentModal(true)}
          >
            <i className="fa fa-comment-o"></i>
          </button>
          <button><i className="fa fa-retweet"></i></button>
          <button><i className="fa fa-heart-o"></i></button>
          <button><i className="fa fa-upload"></i></button>
        </div>
      </div>
      <div id="commentOutput"></div>
      {commentModalDisplay &&
        <CommentModal
          setCommentModal={setCommentModal}
          bio={bio}
          selectedTweet={selectedTweet}
        />
      }
      {<Comments />}
    </div>
  )
}

export default CommentPage
