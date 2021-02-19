import '../homePage/homePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home">
        <span>Home</span>
      </div>
      <div id="tweetContainer">
        <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
          className="home-page-photo" alt="photo" />
        <div>
          <div>
            <textarea className="home-tweet-input" placeholder="What's happening?"></textarea>
            <strong>Everyone can reply</strong>
          </div>
          <div className="tweet-options">
            <div>
              <input type="file" id="addPhoto" />
              <label for="addPhoto">
                <span><i className="fa fa-file-picture-o" id="photoIcon"></i></span>
              </label>
              <span><i className="fa fa-git-square"></i></span>
              <span><i className="fa fa-bar-chart"></i></span>
              <span><i className="fa fa-smile-o"></i></span>
              <span><i className="fa fa-calendar-plus-o"></i></span>
            </div>
            <button type="button" className="add-tweet-button">Tweet</button>
          </div>
        </div>
      </div>
      <div id="tweetOutput"></div>
    </div>
  )
}

export default HomePage
