import Tweets from "./Tweets"
import { useState } from "react"
import MobileLeftNav from "../leftNav/MobileLeftNav"
import CommentModal from "../commentPage/CommentModal"
import './homePage.css'
import TweetDropdown from "./TweetDropdown"
import DeleteModal from "./DeleteModal"
import { inputEventHandler, addTweetData } from "../helper"
import EditTweetModal from "./EditTweetModal"

// Prop drilling

const HomePage = ({
  tweetData, setTweetData, commentModal, editTweetModal, setEditTweetModal,
  setCommentModal, tweetDropdown, setTweetDropdown, deleteModalIsVisible, setDeleteModalIsVisible,
  selectedTweet, setSelectedTweet
}) => {
  const profilePhotoUrl = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  const [mobileLeftNav, setMobileLeftNav] = useState(false)

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
                onChange={() => inputEventHandler('#tweetHomeBox', '#tweetHomeButton')}
                id="tweetHomeBox" className="input-box" placeholder="What's happening?"
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
                onClick={() => addTweetData('#tweetHomeBox', tweetData, setTweetData)}
                type="button" id="tweetHomeButton" className="tweet-button"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div id="tweetOutput">
          <Tweets
            tweetData={tweetData}
            setCommentModal={setCommentModal}
            setTweetDropdown={setTweetDropdown}
            setSelectedTweet={setSelectedTweet}
          />
        </div>
      </div>
      {commentModal && <CommentModal setCommentModal={setCommentModal}/>}
      {tweetDropdown.isActive &&
        <TweetDropdown
          tweetDropdown={tweetDropdown}
          setTweetDropdown={setTweetDropdown}
          setDeleteModalIsVisible={setDeleteModalIsVisible}
          setEditTweetModal={setEditTweetModal}
        />
      }
      {deleteModalIsVisible &&
        <DeleteModal
          selectedTweet={selectedTweet}
          setDeleteModalIsVisible={setDeleteModalIsVisible}
          tweetData={tweetData}
          setTweetData={setTweetData}
        />
      }
      {editTweetModal &&
        <EditTweetModal
          tweetData={tweetData}
          setTweetData={setTweetData}
          tweetDropdown={tweetDropdown}
          setEditTweetModal={setEditTweetModal}
          selectedTweet={selectedTweet}
        />
      }
      { mobileLeftNav && <MobileLeftNav setMobileLeftNav={setMobileLeftNav}/>}
    </div>
  )
}

export default HomePage
