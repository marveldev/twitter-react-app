import database from '../../dataBase'
import { CONSTANTS } from '../common/constants'

const CommentModal = ({ setCommentModal, bio, selectedTweet }) => {
  const addComment = async () => {
    const commentText = document.querySelector('#commentTextBox').value
    const commentObject = {
      commentText,
      parentId: selectedTweet.id
    }

    await database.commentData.add(commentObject)
    setCommentModal(false)
  }

  const inputEventHandler = event => {
    const inputValue = document.querySelector('#commentTextBox').value
    if (inputValue.trim().length >= 1) {
      document.querySelector('#commentButton').classList.add('enable')
      const keyCode = event.which || event.keyCode
      if (keyCode === 13 && event.shiftKey) {
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
          <img src={bio?.profilePhoto || CONSTANTS.PHOTOURL} className="home-page-photo" alt="user-profile" />
          <div>
            <span className="user-profile-name">{bio?.name || CONSTANTS.NAME}</span>
            <p>{selectedTweet.tweetText}</p>
          </div>
        </div>
        <div className="comment-input">
          <img src={bio?.profilePhoto || CONSTANTS.PHOTOURL} className="home-page-photo" alt="user-profile" />
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
