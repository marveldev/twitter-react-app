import { useState } from "react"
import EditProfileModal from './EditProfileModal'
import './profilePage.css'

const ProfilePage = () => {
  const defaultPhotoSource = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  const [modalDisplay, setModalDisplay] = useState(false)
  const [bio, setBio] = useState({
    name: 'Jane Doe', aboutUser: 'Front-end developer', location: 'Lagos, Nigeria',
    website: '', birthDate: 'Born April 5, 1906', profilePhoto: defaultPhotoSource,
    headerPhoto: defaultPhotoSource
  })

  return (
    <div className="profile-page">
      <div className="header">
        <button type="button"><i className="material-icons">&#xe5c4;</i></button>
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
          <button
            onClick={() => setModalDisplay(true)}
            type="button">Edit profile
          </button>
        </div>
        <div className="options-button">
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Likes</button>
        </div>
      </div>
      { modalDisplay &&
        <EditProfileModal
          setModalDisplay={setModalDisplay}
          bio={bio}
          setBio={setBio}
        />
      }
    </div>
  )
}

export default ProfilePage
