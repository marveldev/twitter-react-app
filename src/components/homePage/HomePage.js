import { useState, useEffect } from "react"
import Tweets from "../common/Tweets"
import CommentModal from "../commentPage/CommentModal"
import TweetDropdown from "../common/TweetDropdown"
import DeleteModal from "../common/DeleteModal"
import { inputEventHandler, addTweetData } from "../common/helper"
import EditTweetModal from "../common/EditTweetModal"
import { constants } from "../common/constants"
import { getEntryFromDb } from "../../dataStorage"
import MobileLeftNav from "../leftNav/MobileLeftNav"
import './homePage.css'

const HomePage = ({
  tweetData, setTweetData, commentModal, editTweetModal, setEditTweetModal,
  setCommentModal, tweetDropdown, setTweetDropdown, deleteModalIsVisible, setDeleteModalIsVisible,
  selectedTweet, setSelectedTweet, commentData, setCommentData, dbIsInitialized
}) => {
  const [mobileLeftNav, setMobileLeftNav] = useState(false)
  const [bio, setBio] = useState(null)

  useEffect(() => {
    dbIsInitialized && getEntryFromDb('bio')
      .then(result => setBio(result[0]))
  }, [bio, dbIsInitialized])

  return (
    <div className="home-page">
      <div className="header">
        <button onClick={() => setMobileLeftNav(true)} className="fa fa-align-justify"></button>
        <span>Home</span>
      </div>
      <div className="home-page-content">
        <div id="tweetContainer">
          <img src={bio?.profilePhoto || constants.PHOTOURL}
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div>
              <textarea
                onKeyUp={(event) => bio &&
                  inputEventHandler(event, '#tweetHomeBox',
                    '#tweetHomeButton', tweetData, setTweetData
                  )
                }
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
            bio={bio}
          />
        </div>
      </div>
      {commentModal &&
        <CommentModal
          setCommentModal={setCommentModal}
          bio={bio}
          selectedTweet={selectedTweet}
          commentData={commentData}
          setCommentData={setCommentData}
        />
      }
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
          bio={bio}
        />
      }
      { mobileLeftNav && <MobileLeftNav setMobileLeftNav={setMobileLeftNav}/>}
    </div>
  )
}

export default HomePage
