import Tweets from "./Tweets"
import './homePage.css'
import { useState } from "react"

const HomePage = () => {
  const profilePhotoUrl = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  const [tweetData, setTweetData] = useState([])

  const addTweetData = selector => {
    const tweetText = document.querySelector(selector).value
    const name = 'Derick Alangi'
    const id = 'id' + Date.parse(new Date()).toString()
    const tweetObject = {
      profilePhotoUrl,
      tweetText,
      name,
      id
    }

    setTweetData([...tweetData, tweetObject])
    document.querySelector(selector).value = ''
  }

  return (
    <div className="home-page">
      <div className="header">
        <span>Home</span>
      </div>
      <div className="home-page-content">
        <div id="tweetContainer">
          <img src={profilePhotoUrl} className="home-page-photo" alt="user-profile" />
          <div>
            <div>
              <textarea
                id="homeTweetInput"
                className="home-tweet-input" placeholder="What's happening?"
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
                onClick={() => addTweetData('#homeTweetInput')}
                type="button" className="add-tweet-button"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div id="tweetOutput">
          {tweetData.map(tweetItem => (
            <Tweets
              key={tweetItem.id}
              tweetText={tweetItem.tweetText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
