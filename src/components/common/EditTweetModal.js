import database from '../../dataBase'

const EditTweetModal = ({ setEditTweetModal, selectedTweet, bio }) => {
  const editTweetData = async id => {
    const newTweetInput = document.querySelector('#editTweetBox').value
    await database.tweetData.update(id, {tweetText: newTweetInput})

    setEditTweetModal(false)
  }

  const inputEventHandler = event => {
    const inputValue = document.querySelector('#editTweetBox').value
    if (inputValue.trim().length >= 1) {
      document.querySelector('#editTweetButton').classList.add('enable')
      const keyCode = event.which || event.keyCode
      if (keyCode === 13 && event.shiftKey) {
        editTweetData(selectedTweet.id)
      }
    } else {
      document.querySelector('#editTweetButton').classList.remove('enable')
    }
  }

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
          <img src={bio.profilePhoto} className="home-page-photo" alt="user-profile" />
          <div>
            <div>
              <textarea id="editTweetBox" className="input-box"
                onKeyUp={inputEventHandler}
                defaultValue={selectedTweet.tweetText}  placeholder="Enter new tweet here..."
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
                onClick={() => editTweetData(selectedTweet.id)}
                type="button" id="editTweetButton"className="enable tweet-button"
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
