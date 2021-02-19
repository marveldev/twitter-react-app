import '../homePage/homePage.css'

const HomePage = () => {
  return (
    <div class="home-page">
      <div class="home">
        <span>Home</span>
      </div>
      <div id="tweetContainer">
        <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
          class="home-page-photo" alt="photo" />
        <div>
          <div>
            <textarea class="home-tweet-input" placeholder="What's happening?"></textarea>
            <button><strong>Everyone can reply</strong></button>
          </div>
          <div class="tweet-options">
            <div>
              <input type="file" id="addPhoto" />
              <label for="addPhoto">
                <span><i class="fa fa-file-picture-o" id="photoIcon"></i></span>
              </label>
              <span><i class="fa fa-git-square"></i></span>
              <span><i class="fa fa-bar-chart"></i></span>
              <span><i class="fa fa-smile-o"></i></span>
              <span><i class="fa fa-calendar-plus-o"></i></span>
            </div>
            <button class="add-tweet-button">Tweet</button>
          </div>
        </div>
      </div>
      <div id="tweetOutput"></div>
    </div>
  )
}

export default HomePage
