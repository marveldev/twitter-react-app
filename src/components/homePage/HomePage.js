import Tweets from "./Tweets"
import './homePage.css'
import { useState } from "react"

const HomePage = () => {
  const defaultPhoto = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  const [tweetInput, setInputText] = useState('')
  const [tweetData, setTweetData] = useState([])

  const inputTextHandler = (event) => {
    setInputText(event.target.value)
  }

  const addTweetData = () => {
    setTweetData([
      ...tweetData, {
        name: 'Derick Alangi', id: 'id' + Date.parse(new Date()).toString(),
        profilePhoto: defaultPhoto, tweetText: tweetInput
      }
    ])
    setInputText('')
  }

  return (
    <div className="home-page">
      <div className="header">
        <span>Home</span>
      </div>
      <div className="home-page-content">
        <div id="tweetContainer">
          <img src={defaultPhoto} className="home-page-photo" alt="user-profile" />
          <div>
            <div>
              <textarea
                onChange={inputTextHandler} value={tweetInput}
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
                onClick={addTweetData}
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
              setTweetData={setTweetData}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
