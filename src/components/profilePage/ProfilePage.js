import './profilePage.css'

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="header">
        <button type="button"><i class="material-icons">&#xe5c4;</i></button>
        <div>
          <span>Jane Doe</span>
          <small>4 Tweets</small>
        </div>
      </div>
      <div className="content">
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
          <button type="button">Edit profile</button>
        </div>
        <div className="options-button">
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Likes</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
