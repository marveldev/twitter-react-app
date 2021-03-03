const CommentPage = () => {
  return (
    <div className="comment-page">
      <div className="home">
        <button id="returnButton"><i className="material-icons">&#xe5c4;</i></button>
        <span>Tweet</span>
      </div>
      <div className="tweet-content">
        <div>
          <img src="" className="home-page-photo image" alt="user-profile" />
          <strong className="user-profile-name">Jane Doe</strong>
          <button className="more-button"><i className="material-icons">&#xe5d3;</i></button>
        </div>
        <div>
          <p className="tweet-text">Hey All</p>
          <p>2:51pm. Feb 15, 2021. Twitter Web App</p>
        </div>
        <div className="tweet-interaction">
          <span><strong>42 </strong>Retweets</span>
          <span><strong>12 </strong>Quote Tweets</span>
          <span><strong>675 </strong>Likes</span>
        </div>
        <div className="user-tweet-options">
          <button className="comment-modal-button"><i className="fa fa-comment-o"></i></button>
          <button><i className="fa fa-retweet"></i></button>
          <button><i className="fa fa-heart-o"></i></button>
          <button><i className="fa fa-upload"></i></button>
        </div>
        <div id="commentOutput"></div>
      </div>
      <div className="comment-modal-container">
        <div>
          <button className="close-comment-button">X</button>
        </div>
        <div className="about-comment">
          <img src="" className="home-page-photo image" alt="user-profile" />
          <div>
            <span className="user-profile-name">Jane Doe</span>
            <p>Hey All</p>
          </div>
        </div>
        <div className="tweet-input">
          <img src="" className="home-page-photo" alt="user-profile" />
          <textarea className="comment-box" placeholder="Tweet your reply"></textarea>
        </div>
        <div className="tweet-options">
          <span><i className="fa fa-file-picture-o" id="photoIcon"></i></span>
          <span><i className="material-icons">&#xe908</i></span>
          <span><i className="fa fa-bar-chart"></i></span>
          <span><i className="fa fa-smile-o"></i></span>
          <span><i className="fa fa-calendar-plus-o"></i></span>
          <button className="add-comment-button">Reply</button>
        </div>
      </div>
    </div>
  )
}

export default CommentPage
