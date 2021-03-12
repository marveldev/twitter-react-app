import { useHistory } from "react-router-dom"

const Tweets = ({ tweetData, setCommentModal }) => {
  const history = useHistory('')

  return (
    tweetData.map(tweetItem => (
      <div onClick={() => history.push("/comment")}
        key={tweetItem.id} className="tweet-item"
      >
        <div className="tweet-content-item">
          <img onClick={event => { history.push("/profile"); event.stopPropagation() }} src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="user-profile" />
          <div>
            <div className="tweet-person">
              <strong
                onClick={event => { history.push("/profile"); event.stopPropagation() }}
              >
                Derick
              </strong>
              <button><i className="material-icons">&#xe5d3;</i></button>
            </div>
            <p>{tweetItem.tweetText}</p>
            <div className="tweet-info">
              <button
                onClick={event => { setCommentModal(true); event.stopPropagation() }}
              >
                <i className="fa fa-comment-o"></i>
                5.1k
              </button>
              <button><i className="fa fa-retweet"></i>2.1k</button>
              <button><i className="fa fa-heart-o"></i>3.1k</button>
              <button><i className="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
      </div>
    ))
  )
}

export default Tweets
