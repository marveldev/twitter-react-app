const TweetModal = ({ setTweetModalDisplay, tweetData, setTweetData }) => {
  const profilePhotoUrl = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  const tweetTextHandler = () => {
    const tweetModalText = document.querySelector('#modalTweetText')
    const tweetModalTextValue = tweetModalText.value
    if (tweetModalTextValue.trim().length >= 1) {
      document.querySelector('#modalTweetButton').classList.add('enable')
    } else {
      document.querySelector('#modalTweetButton').classList.remove('enable')
    }
  }

  const addTweetData = () => {
    const tweetText = document.querySelector('#modalTweetText').value
    const name = 'Derick Alangi'
    const id = 'id' + Date.parse(new Date()).toString()
    const tweetObject = {
      profilePhotoUrl,
      tweetText,
      name,
      id
    }

    setTweetData([...tweetData, tweetObject])
    setTweetModalDisplay(false)
  }

  return (
    <>
      <div className="overlay" onClick={() => setTweetModalDisplay(false)}></div>
      <div className="tweet-modal">
        <div className="tweet-modal-header">
          <button type="button" onClick={() => setTweetModalDisplay(false)}>
            <i className="material-icons">&#xe5cd;</i>
          </button>
        </div>
        <div id="tweetContainer">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
            className="home-page-photo" alt="user-profile" />
          <div>
            <div>
              <textarea id="modalTweetText" className="input-box"
                onChange={() => tweetTextHandler()}
                placeholder="What's happening?"
              >
              </textarea>
              <strong>Everyone can reply</strong>
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
                onClick={() => addTweetData()}
                type="button" id="modalTweetButton"
                className="tweet-button"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TweetModal
