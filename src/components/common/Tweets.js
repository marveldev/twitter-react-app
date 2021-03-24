import { useHistory } from "react-router-dom"

const Tweets = ({ tweetData, setCommentModal, setTweetDropdown, setSelectedTweet, bio }) => {
  const history = useHistory()
  const openTweetDropdown = (event, tweetItem) => {
    event.stopPropagation()
    const top = event.clientY
    setTweetDropdown({isActive: true, position: (top + 'px')})
    setSelectedTweet(tweetItem)
  }

  const openCommentModal = (event, tweetItem) => {
    event.stopPropagation()
    setCommentModal(true)
    setSelectedTweet(tweetItem)
  }

  return (
    tweetData.map(tweetItem => (
      <div onClick={() => {history.push("/comment"); setSelectedTweet(tweetItem) }}
        key={tweetItem.id} className="tweet-item"
      >
        <div className="tweet-content-item">
          <img onClick={event => { event.stopPropagation(); history.push("/profile") }}
            src={bio?.profilePhoto} className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong
                onClick={event => { event.stopPropagation(); history.push("/profile") }}
              >
                {bio?.name}
              </strong>
              <button type="button" title="More"
                onClick={event => openTweetDropdown(event, tweetItem)}
              >
                <i className="material-icons">&#xe5d3;</i>
              </button>
            </div>
            <p>{tweetItem.tweetText}</p>
            <div className="tweet-info">
              <button type="button"
                onClick={event => openCommentModal(event, tweetItem)}
              >
                <i className="fa fa-comment-o"></i>
                5.1k
              </button>
              <button type="button"><i className="fa fa-retweet"></i>2.1k</button>
              <button type="button"><i className="fa fa-heart-o"></i>3.1k</button>
              <button type="button"><i className="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
      </div>
    ))
  )
}

export default Tweets
