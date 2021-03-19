import { useState } from "react"
import { useHistory } from "react-router-dom"
import EditProfileModal from './EditProfileModal'
import Tweets from '../common/Tweets'
import CommentModal from "../commentPage/CommentModal"
import DeleteModal from "../common/DeleteModal"
import TweetDropdown from "../common/TweetDropdown"
import EditTweetModal from "../common/EditTweetModal"
import './profilePage.css'

const ProfilePage = ({
  tweetData, setTweetData, commentModal, editTweetModal, setEditTweetModal, selectedTweet,
  setCommentModal, tweetDropdown, setTweetDropdown, deleteModalIsVisible, setDeleteModalIsVisible,
  setSelectedTweet
}) => {
  const { goBack } = useHistory()
  const profilePhotoUrl = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  const [editModalDisplay, setEditModal] = useState(false)
  const [bio, setBio] = useState({
    name: 'Jane Doe',
    aboutUser: 'Front-end developer',
    location: 'Lagos, Nigeria',
    website: '',
    birthDate: 'Born April 5, 1906',
    profilePhoto: profilePhotoUrl,
    headerPhoto: profilePhotoUrl
  })

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
          <span>{bio.name}</span>
          <small>4 Tweets</small>
        </div>
      </div>
      <div className="page-content">
        <img src={bio.headerPhoto} className="photo" alt=""/>
        <div className="user-bio-container">
          <div>
            <div className="profile-photo">
              <img src={bio.profilePhoto} alt=""/>
            </div>
            <div className="user-bio">
              <strong>{bio.name}</strong>
              <p>{bio.aboutUser}</p>
              <span><i className="material-icons">&#xe55f;</i>{bio.location}</span>
              <span><i className="fa fa-birthday-cake"></i>{bio.birthDate}</span>
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
            setCommentModal={setCommentModal}
            setTweetDropdown={setTweetDropdown}
            setSelectedTweet={setSelectedTweet}
          />
        </div>
      </div>
      { editModalDisplay &&
        <EditProfileModal
          setEditModal={setEditModal}
          bio={bio}
          setBio={setBio}
        />
      }
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
    </div>
  )
}

export default ProfilePage
