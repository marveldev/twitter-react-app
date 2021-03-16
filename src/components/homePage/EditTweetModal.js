import { inputEventHandler } from "../helper"

const EditTweetModal = ({ setEditTweetModal }) => {
  return (
    <>
      <div onClick={() => setEditTweetModal(false)} className="overlay"></div>
      <div className="edit-tweet-modal">
        <div className="tweet-modal-header">
          <button onClick={() => setEditTweetModal(false)} type="button">
            <i className="material-icons">&#xe5cd;</i>
          </button>
        </div>
        <div id="tweetContainer">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
            className="home-page-photo" alt="user-profile" />
          <div>
            <div>
              <textarea id="editTweetBox" className="input-box"
                onChange={() => inputEventHandler('#editTweetBox', '#editTweetButton')}
                placeholder="Enter new tweet here..."
              >
              </textarea>
            </div>
            <div className="tweet-options">
              <div>
                <input type="file" id="addPhoto" />
                <label htmlFor="addPhoto">
                  <span><i className="fa fa-file-picture-o" id="photoIcon"></i></span>
                </label>
                <span><i className="fa fa-git-square"></i></span>
                <span><i className="fa fa-bar-chart"></i></span>
                <span><i className="fa fa-smile-o"></i></span>
                <span><i className="fa fa-calendar-plus-o"></i></span>
              </div>
              <button
                type="button" id="editTweetButton"
                className="tweet-button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditTweetModal
