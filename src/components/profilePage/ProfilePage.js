import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import EditProfileModal from './EditProfileModal'
import Tweets from '../common/Tweets'
import CommentModal from '../commentPage/CommentModal'
import DeleteModal from '../common/DeleteModal'
import TweetDropdown from '../common/TweetDropdown'
import EditTweetModal from '../common/EditTweetModal'
import { getEntryFromDb } from '../../dataStorage'
import { constants } from '../common'
import './profilePage.css'

const ProfilePage = ({
  tweetData, setTweetData, commentModal, editTweetModal, setEditTweetModal, selectedTweet,
  setCommentModal, tweetDropdown, setTweetDropdown, deleteModalIsVisible, setDeleteModalIsVisible,
  setSelectedTweet, commentData, setCommentData, dbIsInitialized
}) => {
  const { goBack } = useHistory()
  const [editProfileModal, setEditProfileModal] = useState(false)
  const [bio, setBio] = useState(null)

  useEffect(() => {
    dbIsInitialized && getEntryFromDb('bio')
      .then(result => setBio(result[0]))
  }, [bio, dbIsInitialized])

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
          <span>{bio?.name || constants.NAME}</span>
          <small>4 Tweets</small>
        </div>
      </div>
      <div className="page-content">
        <img src={bio?.headerPhoto || constants.PHOTOURL} className="photo" alt=""/>
        <div className="user-bio-container">
          <div>
            <div className="profile-photo">
              <img src={bio?.profilePhoto || constants.PHOTOURL} alt=""/>
            </div>
            <div className="user-bio">
              <strong>{bio?.name || constants.NAME}</strong>
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
          <button onClick={() => setEditProfileModal(true)} type="button">
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
            setCommentModal={setCommentModal}
            setTweetDropdown={setTweetDropdown}
            setSelectedTweet={setSelectedTweet}
            bio={bio}
          />
        </div>
      </div>
      { editProfileModal &&
        <EditProfileModal
          setEditProfileModal={setEditProfileModal}
          bio={bio}
          setBio={setBio}
        />
      }
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
    </div>
  )
}

export default ProfilePage
