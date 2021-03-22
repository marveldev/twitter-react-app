const Comments = ({ commentData, bio, selectedTweet }) => {
  const filteredData = commentData.filter(item => item.parentId === selectedTweet.id)

  return (
    filteredData.map(commentItem => (
      <div key={commentItem.id} className="comment-item">
        <div className="tweet-content-item">
          <img src={bio.profilePhoto} className="home-page-photo" alt="user-profile" />
          <div>
            <div className="tweet-person">
              <strong>{bio.name}</strong>
              <button><i className="material-icons">&#xe5d3;</i></button>
            </div>
            <p>{commentItem.commentText}</p>
            <div className="tweet-info">
              <button><i className="fa fa-comment-o"></i>5.1k</button>
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

export default Comments
