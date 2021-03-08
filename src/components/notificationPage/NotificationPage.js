import "./notificationPage.css"

const NotificationPage = () => {
  return (
    <div className="notification-page">
      <div id="header">
        <div>
          <span>Notifications</span>
          <button type="button"><i className="material-icons">&#xe8b8;</i></button>
        </div>
        <div id="pageNavButtons">
          <button type="button" className="current">All</button>
          <button type="button">Mentions</button>
        </div>
      </div>
      <div className="notification-page-content">
        <div>
          <i className="fa fa-bell symbol"></i>
          <div>
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="user-profile"/>
            <p>New Tweet notifications for <strong>Ebenezer Don</strong></p>
          </div>
        </div>
        <div>
          <i className="fa fa-user-o symbol"></i>
          <div>
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="user-profile"/>
            <p><strong>Alo Kayode</strong> followed you</p>
          </div>
        </div>
        <div>
          <i className="fa fa-heart heart-icon"></i>
          <div>
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="user-profile"/>
            <p><strong>Ebenezer Don</strong> liked your Tweet</p>
            <p>Ten ways to know a junior developer</p>
          </div>
        </div>
        <div>
          <i className="fa fa-star"></i>
          <div>
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="user-profile"/>
            <p>Recommended For You</p>
            <p>I'm fired</p>
          </div>
        </div>
        <div>
          <i className="fa fa-heart heart-icon"></i>
          <div>
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="user-profile"/>
            <p><strong>John Ademoye</strong> liked tour Tweet</p>
            <p>hey</p>
          </div>
        </div>
        <div>
          <i className="fa fa-bell symbol"></i>
          <div>
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="user-profile"/>
            <p>New Tweet notifications for <strong>Ebenezer Don</strong></p>
          </div>
        </div>
        <div>
          <i className="fa fa-user-o symbol"></i>
          <div>
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="user-profile"/>
            <p><strong>Alo Kayode</strong> followed you</p>
          </div>
        </div>
        <div>
          <i className="fa fa-star"></i>
          <div>
            <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="user-profile"/>
            <p>Recommended For You</p>
            <p>I'm fired</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationPage
