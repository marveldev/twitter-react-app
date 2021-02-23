import "./notificationPage.css"

const NotificationPage = () => {
  return (
    <div className="notification-page">
      <div className="header">
        <div>
          <span>Notifications</span>
          <button type="button"><i class="material-icons">&#xe8b8;</i></button>
        </div>
        <div>
          <button>All</button>
          <button>Mentions</button>
        </div>
      </div>
      <div className="notification-page-content">
        <div>
          <i class="fa fa-bell"></i>
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
          <p>New Tweet notifications for <strong>Ebenezer Don</strong></p>
        </div>
        <div>
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
          <p><strong>Alo Kayode</strong> followed you</p>
        </div>
        <div>
          <i class="fa fa-heart"></i>
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
          <p><strong>Ebenezer Don</strong> liked your Tweet</p>
          <p>Ten ways to know a junior developer</p>
        </div>
        <div>
          <i class="fa fa-star"></i>
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
          <p>Recommended For You</p>
          <p>I'm fired</p>
        </div>
        <div>
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
          <p><strong>John Ademoye</strong> liked tour Tweet</p>
          <p>hey</p>
        </div>
      </div>
    </div>
  )
}

export default NotificationPage
