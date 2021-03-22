const EditTweetModal = ({
  setEditTweetModal, tweetData, setTweetData, selectedTweet, bio
}) => {
  const editTweetData = () => {
    const newTweetInput = document.querySelector('#editTweetBox').value
    const nextState =  tweetData.map((tweetItem) => {
      if (tweetItem.id === selectedTweet.id) {
        return { ...tweetItem, tweetText: newTweetInput }
      }
      return tweetItem
    })

    setTweetData(nextState)
    setEditTweetModal(false)
  }

  const inputEventHandler = (event,  buttonSelector) => {
    const inputValue = event.target.value
    if (inputValue.trim().length >= 1) {
      document.querySelector(buttonSelector).classList.add('enable')
      if (event.which === 13) {
        editTweetData()
      }
    } else {
      document.querySelector(buttonSelector).classList.remove('enable')
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
                onKeyUp={(event) => inputEventHandler(event, '#editTweetButton')}
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
                onClick={editTweetData}
                type="button" id="editTweetButton"
                className="enable tweet-button"
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
