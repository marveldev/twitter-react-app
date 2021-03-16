import Tweets from "./Tweets"
import { useState } from "react"
import MobileLeftNav from "../leftNav/MobileLeftNav"
import CommentModal from "../commentPage/CommentModal"
import './homePage.css'
import TweetDropdown from "./TweetDropdown"
import DeleteModal from "./DeleteModal"
import { inputEventHandler, addTweetData } from "../helper"
import EditTweetModal from "./EditTweetModal"

const HomePage = (
  {
    tweetData, setTweetData, commentModal, editTweetModal, setEditTweetModal,
    setCommentModal, tweetDropdown, setTweetDropdown, deleteModal, setDeleteModal
  }
) => {
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
          />
        </div>
      </div>
      {commentModal && <CommentModal setCommentModal={setCommentModal}/>}
      {tweetDropdown.isActive &&
        <TweetDropdown
          tweetDropdown={tweetDropdown}
          setTweetDropdown={setTweetDropdown}
          setDeleteModal={setDeleteModal}
          setEditTweetModal={setEditTweetModal}
        />
      }
      {deleteModal &&
        <DeleteModal
          tweetDropdown={tweetDropdown}
          setDeleteModal={setDeleteModal}
          tweetData={tweetData}
          setTweetData={setTweetData}
        />
      }
      {editTweetModal &&
        <EditTweetModal
          tweetDropdown={tweetDropdown}
          setEditTweetModal={setEditTweetModal}
        />
      }
      { mobileLeftNav && <MobileLeftNav setMobileLeftNav={setMobileLeftNav}/>}
    </div>
  )
}

export default HomePage
