import './profilePage.css'

const ProfilePage = () => {
  const openEditModal = () => {
    document.querySelector('.edit-profile-modal').style.display = 'block'
    document.querySelector('#overlay').style.display = 'block'
  }

  return (
    <div className="profile-page">
      <div className="header">
        <button type="button"><i class="material-icons">&#xe5c4;</i></button>
        <div>
          <span>Jane Doe</span>
          <small>4 Tweets</small>
        </div>
      </div>
      <div>
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
              <span><i class="material-icons">&#xe55f;</i>Lagos, Nigeria</span>
              <span><i class="fa fa-birthday-cake"></i>Born April 5, 1990</span>
              <span><i class="fa fa-calendar"></i>Joined January 2021</span>
              <div>
                <span><strong>48 </strong>Following</span>
                <span><strong>8 </strong>Followers</span>
              </div>
            </div>
          </div>
          <button type="button" onClick={() => openEditModal()}>Edit profile</button>
        </div>
        <div className="options-button">
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Likes</button>
        </div>
      </div>
      <div className="edit-profile-modal">
        <div className="header">
          <button type="button">X</button>
          <span>Edit profile</span>
          <button>Save</button>
        </div>
        <div className="content">
          <div className="user-bio-container">
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"
              className="photo" alt="photo" />
          </div>
          <div>
            <div className="profile-photo">
              <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
            </div>
            <div className="entry-box-container">
              <textarea placeholder="Name"></textarea>
              <textarea placeholder="Bio"></textarea>
              <textarea placeholder="Location"></textarea>
              <textarea placeholder="Website"></textarea>
              <textarea placeholder="Birth date"></textarea>
            </div>
          </div>
        </div>
        {/* <div>
          <strong>Edit Profile</strong>
          <button id="closeProfileButton">X</button>
        </div>
        <div>
          <div className="profile-entry">
            <div>
              <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
                id="photo" alt="photo" />
              <input type="file" id="profilePhoto" />
              <label for="profilePhoto">
                <strong id="editPhoto">EDIT PHOTO</strong>
              </label>
            </div>
            <input type="text" id="nameInput" placeholder="Enter new name..." required/>
          </div>
          <button type="submit" id="saveProfileButton">Save</button>
        </div> */}
      </div>
    </div>
  )
}

export default ProfilePage
