import { useState } from "react"
import { Link } from "react-router-dom"
import CommentModal from "../commentPage/CommentModal"

const Tweets = ({ tweetData }) => {
  const [commentModalDisplay, setCommentModal] = useState(false)

  return (
    tweetData.map(tweetItem => (
      <Link to='/comment' key={tweetItem.id} className="tweet-item">
        <div className="tweet-content-item">
          <img onClick={()=>console.log('hey')} src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="user-profile" />
          <div>
            <div className="tweet-person">
              <strong className="stuff">Derick </strong>
              <button className=" one" onClick={()=>console.log('hey')} ><i className="material-icons">&#xe5d3;</i></button>
            </div>
            <p>{tweetItem.tweetText}</p>
            <div className="tweet-info">
              <button className="stuff two" onClick={() => setCommentModal(true)}>
                <i className="fa fa-comment-o"></i>
                5.1k
              </button>
              <button><i className="fa fa-retweet"></i>2.1k</button>
              <button><i className="fa fa-heart-o"></i>3.1k</button>
              <button><i className="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
        {commentModalDisplay && <CommentModal setCommentModal={setCommentModal}/>}
      </Link>
    ))
  )
}

export default Tweets
