import Tweets from "./Tweets"
import { useState } from "react"
import MobileLeftNav from "../leftNav/MobileLeftNav"
import CommentModal from "../commentPage/CommentModal"
import './homePage.css'

const HomePage = ({ tweetData, setTweetData, commentModal, setCommentModal }) => {
  const profilePhotoUrl = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'

  const [mobileLeftNav, setMobileLeftNav] = useState(false)

  const tweetTextHandler = () => {
    const homeTweetTextValue = document.querySelector('.home').value
    if (homeTweetTextValue.trim().length >= 1) {
      document.querySelector('#home').classList.add('enable')
    } else {
      document.querySelector('#home').classList.remove('enable')
    }
  }

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
    document.querySelector('#home').classList.remove('enable')
  }

  return (
    <div className="home-page">
      <div className="header">
        <button onClick={() => setMobileLeftNav(true)} className="fa fa-align-justify"></button>
        <span>Home</span>
      </div>
      <div className="home-page-content">
        <div id="tweetContainer">
          <img src={profilePhotoUrl} className="home-page-photo" alt="user-profile" />
          <div>
            <div>
              <textarea
                onChange={() => tweetTextHandler()}
                className="home input-box" placeholder="What's happening?"
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
                onClick={() => addTweetData('.home')}
                type="button" id="home" className="tweet-button"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div id="tweetOutput">
          <Tweets tweetData={tweetData} setCommentModal={setCommentModal} />
        </div>
      </div>
      {commentModal && <CommentModal setCommentModal={setCommentModal}/>}
      { mobileLeftNav && <MobileLeftNav setMobileLeftNav={setMobileLeftNav}/>}
    </div>
  )
}

export default HomePage
