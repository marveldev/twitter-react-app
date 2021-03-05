import { Link } from "react-router-dom"

const Tweets = ({ tweetText }) => {
  return (
    <div className="tweet-item">
      <div className="tweet-content-item">
        <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="user-profile" />
        <div>
          <Link to="./comment" className="comment-link">
            <div className="tweet-person">
              <strong>Derick Alangi</strong>
              <button><i className="material-icons">&#xe5d3;</i></button>
            </div>
            <p>{tweetText}</p>
          </Link>
          <div className="tweet-info">
            <button><i className="fa fa-comment-o"></i>5.1k</button>
            <button><i className="fa fa-retweet"></i>2.1k</button>
            <button><i className="fa fa-heart-o"></i>3.1k</button>
            <button><i className="fa fa-upload"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweets
