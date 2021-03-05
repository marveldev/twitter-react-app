const CommentModal = ({ setCommentModal }) => {
  return (
    <>
      <div className="overlay" onClick={() => setCommentModal(false)}></div>
      <div className="comment-modal">
        <div className="tweet-modal-header">
          <button type="button" onClick={() => setCommentModal(false)}>
            <i className="material-icons">&#xe5cd;</i>
          </button>
        </div>
        <div className="comment-content">
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="user-profile" />
          <div>
            <span className="user-profile-name">Jane Doe</span>
            <p>Hey All</p>
          </div>
        </div>
        <div className="comment-input">
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="user-profile" />
          <textarea className="home-tweet-input" placeholder="Tweet your reply"></textarea>
        </div>
        <div className="tweet-options">
          <div>
            <span><i className="fa fa-file-picture-o"></i></span>
            <span><i className="fa fa-git-square"></i></span>
            <span><i className="fa fa-bar-chart"></i></span>
            <span><i className="fa fa-smile-o"></i></span>
            <span><i className="fa fa-calendar-plus-o"></i></span>
          </div>
          <button className="add-tweet-button">Reply</button>
        </div>
      </div>
    </>
  )
}

export default CommentModal
