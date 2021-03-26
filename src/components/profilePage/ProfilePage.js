import { useState } from "react"
import { useHistory } from "react-router-dom"
import EditProfileModal from './EditProfileModal'
import Tweets from '../common/Tweets'
import CommentModal from "../commentPage/CommentModal"
import DeleteModal from "../common/DeleteModal"
import TweetDropdown from "../common/TweetDropdown"
import EditTweetModal from "../common/EditTweetModal"
import './profilePage.css'
import { CONSTANTS } from '../common/constants'

const ProfilePage = ({
  tweetData, setTweetData, commentModal, editTweetModal, setEditTweetModal, selectedTweet,
  setCommentModal, tweetDropdown, setTweetDropdown, deleteModalIsVisible, setDeleteModalIsVisible,
  setSelectedTweet, bioData, commentData, setCommentData
}) => {
  const { goBack } = useHistory()
  const [editModalDisplay, setEditModal] = useState(false)
  const bio = bioData[0]

  return (
    <div className="profile-page">
      <div className="header">
        <button
          onClick={() => goBack()}
          type="button"
        >
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <div>
          <span>{bio?.name || CONSTANTS.NAME}</span>
          <small>4 Tweets</small>
        </div>
      </div>
      <div className="page-content">
        <img src={bio?.headerPhoto || CONSTANTS.PHOTOURL} className="photo" alt=""/>
        <div className="user-bio-container">
          <div>
            <div className="profile-photo">
              <img src={bio?.profilePhoto || CONSTANTS.PHOTOURL} alt=""/>
            </div>
            <div className="user-bio">
              <strong>{bio?.name || CONSTANTS.NAME}</strong>
              <p>{bio?.aboutUser}</p>
              <span><i className="material-icons">&#xe55f;</i>{bio?.location}</span>
              <span><i className="fa fa-birthday-cake"></i>{bio?.birthDate}</span>
              <span><i className="fa fa-calendar"></i>Joined January 2021</span>
              <div>
                <span><strong>48 </strong>Following</span>
                <span><strong>8 </strong>Followers</span>
              </div>
            </div>
          </div>
          <button onClick={() => setEditModal(true)} type="button">
            Edit profile
          </button>
        </div>
        <div className="options-button">
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Likes</button>
        </div>
        <div id="tweetOutput">
          {/* <Tweets
            tweetData={tweetData}
            bio={bio}
            setCommentModal={setCommentModal}
            setTweetDropdown={setTweetDropdown}
            setSelectedTweet={setSelectedTweet}
          /> */}
        </div>
      </div>
      { editModalDisplay &&
        <EditProfileModal
          setEditModal={setEditModal}
          bio={bio}
        />
      }
      {commentModal &&
        <CommentModal
          setCommentModal={setCommentModal}
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
        />
      }
    </div>
  )
}

export default ProfilePage
