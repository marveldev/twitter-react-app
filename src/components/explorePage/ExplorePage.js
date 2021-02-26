import "./explorePage.css"

const ExplorePage = () => {
  return (
    <div className="explore-page">
      <div className="header">
        <i className="fa fa-search icon"></i>
        <input type="text" className="search-input" placeholder="Search Twitter" />
        <button type="button"><i className="material-icons">&#xe8b8;</i></button>
      </div>
      <div className="explore-page-content">
        <div>
          <div id="image"></div>
          <div id="imageInfo">
            <p>COVID-19 LIVE</p>
            <p>Updates on Covid-19 in Nigeria</p>
          </div>
        </div>
        <div>
          <h4>Trends for you</h4> 
          <div className="current-trend">
            <p>Technology Trending</p>
            <strong>iPhone 13</strong>
            <p>7,254k Tweets</p>
          </div>
          <div className="current-trend">
            <p>Trending in Nigeria</p>
            <strong>WhatsApp</strong>
            <p>10.8k Tweets</p>
          </div>
          <div className="current-trend">
            <p>Trending in Nigeria</p>
            <strong>Weird MC</strong>
            <p>12k Tweets</p>
          </div>
          <div className="current-trend">
            <p>Hip hop Trending</p>
            <strong>Lil Wayne</strong>
            <p>4,664 Tweets</p>
          </div>
          <div className="current-trend">
            <p>Sports Trending</p>
            <strong>Hazard</strong>
            <p>17.4k Tweets</p>
          </div>
        </div>
        <div>
          <h4>Computer Programming</h4> 
          <div className="tweet-content-item">
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="photo" />
            <div>
              <div className="tweet-person">
                <strong>Derick Alangi</strong>
                <button><i className="material-icons">&#xe5d3;</i></button>
              </div>
              <p>
                As developers, one of the most used body part is our eyes due to staring at screens.
              </p>
              <div className="tweet-info">
                <button><i className="fa fa-comment-o"></i>5.1k</button>
                <button><i className="fa fa-retweet"></i>2.1k</button>
                <button><i className="fa fa-heart-o"></i>3.1k</button>
                <button><i className="fa fa-upload"></i></button>
              </div>
            </div>
          </div>
          <div className="tweet-content-item">
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="photo" />
            <div>
              <div className="tweet-person">
                <strong>Molly Struve</strong>
                <button><i className="material-icons">&#xe5d3;</i></button>
              </div>
              <p>
                Interviewer: What makes you think you are qualified for this job?
                Developer: I know 2 things, how to open my editor and how to search google
              </p>
              <div className="tweet-info">
                <button><i className="fa fa-comment-o"></i>5.1k</button>
                <button><i className="fa fa-retweet"></i>2.1k</button>
                <button><i className="fa fa-heart-o"></i>3.1k</button>
                <button><i className="fa fa-upload"></i></button>
              </div>
            </div>
          </div>
          <div className="tweet-content-item">
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="photo" />
            <div>
              <div className="tweet-person">
                <strong>Danny Thompson</strong>
                <button><i className="material-icons">&#xe5d3;</i></button>
              </div>
              <p>
                Bad Habits you should break as a developer!
              </p>
              <div className="tweet-info">
                <button><i className="fa fa-comment-o"></i>5.1k</button>
                <button><i className="fa fa-retweet"></i>2.1k</button>
                <button><i className="fa fa-heart-o"></i>3.1k</button>
                <button><i className="fa fa-upload"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
