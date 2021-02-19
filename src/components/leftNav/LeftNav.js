import '../leftNav/leftNav.css'

const LeftNav = () => {
  return (
    <div className="left-nav">
      <div className="left-nav-content">
        <span id="logo"><i className="fa">&#xf099;</i></span>
        <button id="homeButton"><i className="glyphicon glyphicon-home"></i>Home</button>
        <button><i className="fa fa-hashtag"></i>Explore</button>
        <button><i className="fa fa-bell-o"></i>Notifications</button>
        <button><i className="fa fa-envelope-o"></i>Messages</button>
        <button><i className="fa fa-bookmark-o"></i>Bookmarks</button>
        <button><i className="fa fa-list-alt"></i>Lists</button>
        <button><i className="fa fa-user-o"></i>Profile</button>
        <button><i className="fa fa-caret-down"></i>More</button>
        <button id="tweetModalButton">Tweet</button>
        <div className="user-info">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
            className="left-nav-photo" alt="photo" />
          <span>Jane Doe</span>
        </div>
      </div>
    </div>
  )
}

export default LeftNav
