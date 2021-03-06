import { useState } from "react"
import { useHistory } from "react-router-dom"
import Tweets from '../common/Tweets'
import CommentModal from "../commentPage/CommentModal"
import DeleteModal from "../common/DeleteModal"
import TweetDropdown from "../common/TweetDropdown"
import EditTweetModal from "../common/EditTweetModal"
import { CONSTANTS } from '../common/constants'
import EditProfileModal from './EditProfileModal'
import './profilePage.css'

const ProfilePage = ({
  tweetData, commentModal, editTweetModal, setEditTweetModal, selectedTweet,
  setCommentModal, tweetDropdown, setTweetDropdown, deleteModalIsVisible,
  setDeleteModalIsVisible, setSelectedTweet, bioData
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
          <Tweets
            tweetData={tweetData}
            bio={bio}
            setSelectedTweet={setSelectedTweet}
            setCommentModal={setCommentModal}
            setTweetDropdown={setTweetDropdown}
          />
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
          bio={bio}
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
        />
      }
      {editTweetModal &&
        <EditTweetModal
          tweetData={tweetData}
          tweetDropdown={tweetDropdown}
          setEditTweetModal={setEditTweetModal}
          selectedTweet={selectedTweet}
          bio={bio}
        />
      }
    </div>
  )
}

export default ProfilePage
