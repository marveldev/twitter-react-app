import { useState } from "react"
import './profilePage.css'

const ProfilePage = () => {
  const [modalDisplay, setModalDisplay] = useState(false)

  const editProfileModal = (
    <>
      <div className="overlay" onClick={() => setModalDisplay(false)}></div>
      <div className="edit-profile-modal">
        <div className="header">
          <button type="button" id="closeModalButton"
            onClick={() => setModalDisplay(false)}>X
          </button>
          <span>Edit profile</span>
          <button id="saveProfileButton">Save</button>
        </div>
        <div className="content">
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"
            className="photo" alt="photo" />
          <div>
            <div className="profile-photo">
              <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
            </div>
            <div className="entry-box-container">
              <input type="text" maxLength="20" placeholder="Name" required/>
              <textarea placeholder="Bio"></textarea>
              <input type="text" maxLength="20" placeholder="Location"/>
              <textarea placeholder="Website"></textarea>
              <label>Birth date
                <input type="date" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="profile-page">
      <div className="header">
        <button type="button"><i className="material-icons">&#xe5c4;</i></button>
        <div>
          <span>Jane Doe</span>
          <small>4 Tweets</small>
        </div>
      </div>
      <div className="page-content">
        <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"
          className="photo" alt="photo" />
        <div className="user-bio-container">
          <div>
            <div className="profile-photo">
              <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
            </div>
            <div className="user-bio">
              <strong>Jane Doe</strong>
              <p>Front-end developer || Christian</p>
              <span><i className="material-icons">&#xe55f;</i>Lagos, Nigeria</span>
              <span><i className="fa fa-birthday-cake"></i>Born April 5th 1999</span>
              <span><i className="fa fa-calendar"></i>Joined January 2021</span>
              <div>
                <span><strong>48 </strong>Following</span>
                <span><strong>8 </strong>Followers</span>
              </div>
            </div>
          </div>
          <button type="button" onClick={() => setModalDisplay(true)}>Edit profile</button>
        </div>
        <div className="options-button">
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Likes</button>
        </div>
      </div>
      { modalDisplay && editProfileModal }
    </div>
  )
}

export default ProfilePage
