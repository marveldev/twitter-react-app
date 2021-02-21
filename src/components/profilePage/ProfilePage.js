import './profilePage.css'

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="header">
        <button type="button"><i class="material-icons">&#xe5c4;</i></button>
        <span>Jane Doe</span>
        <small>4 Tweets</small>
      </div>
      <div className="content">
        <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"
          className="photo" alt="photo" />
        <div className="user-bio">
          <div>
            <div className="profile-photo">
              <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
            </div>
            <span>Jane Doe</span>
            <p>Front-end developer || Christian</p>
            <div>
              <span><i class="material-icons">&#xe0c8;</i>Lagos, Nigeria</span>
              <span><i class="fa fa-birthday-cake"></i>Born April 5, 1990</span>
              <span><i class="fa fa-calendar"></i>Joined January 2021</span>
              <span><strong>48 </strong>Following</span>
              <span><strong>8 </strong>Followers</span>
            </div>
          </div>
          <button type="button">Edit profile</button>
        </div>
        <div>
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
