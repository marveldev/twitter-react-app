import { addEntryToDb } from '../../dataStorage'

const CommentModal = ({ setCommentModal, bio, selectedTweet, commentData, setCommentData }) => {
  const addComment = () => {
    const commentText = document.querySelector('#commentTextBox').value
    const id = 'id' + Date.parse(new Date()).toString()
    const commentObject = {
      commentText,
      id,
      parentId: selectedTweet.id
    }

    setCommentData([...commentData, commentObject])
    setCommentModal(false)
    addEntryToDb('commentData', commentObject)
  }

  const inputEventHandler = (event) => {
    const inputValue = document.querySelector('#commentTextBox').value
    if (inputValue.trim().length >= 1) {
      document.querySelector('#commentButton').classList.add('enable')
      if (event.which === 13 && event.shiftKey) {
        addComment()
      }
    } else {
      document.querySelector('#commentButton').classList.remove('enable')
    }
  }

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
          <img src={bio?.profilePhoto} className="home-page-photo" alt="user-profile" />
          <div>
            <span className="user-profile-name">{bio?.name}</span>
            <p>{selectedTweet.tweetText}</p>
          </div>
        </div>
        <div className="comment-input">
          <img src={bio?.profilePhoto} className="home-page-photo" alt="user-profile" />
          <textarea onKeyUp={inputEventHandler} className="input-box" id="commentTextBox"
            placeholder="Tweet your reply"
          >
          </textarea>
        </div>
        <div className="tweet-options">
          <div>
            <span><i className="fa fa-file-picture-o"></i></span>
            <span><i className="fa fa-git-square"></i></span>
            <span><i className="fa fa-bar-chart"></i></span>
            <span><i className="fa fa-smile-o"></i></span>
            <span><i className="fa fa-calendar-plus-o"></i></span>
          </div>
          <button onClick={addComment} id="commentButton" className="tweet-button">Reply</button>
        </div>
      </div>
    </>
  )
}

export default CommentModal
