import { Link } from 'react-router-dom'
import './leftNav.css'

const LeftNav = () => {
  return (
    <div className="left-nav">
      <div className="left-nav-content">
        <span id="logo"><i className="fa">&#xf099;</i></span>
        <Link to="/" className="nav-button active">
          <i className="glyphicon glyphicon-home"></i>Home
        </Link>
        <Link to="/explore" className="nav-button">
          <i className="fa fa-hashtag"></i>Explore
        </Link>
        <button type="button" className="nav-button"><i className="fa fa-bell-o"></i>Notifications</button>
        <button type="button" className="nav-button"><i className="fa fa-envelope-o"></i>Messages</button>
        <button type="button" className="nav-button"><i className="fa fa-bookmark-o"></i>Bookmarks</button>
        <button type="button" className="nav-button"><i className="fa fa-list-alt"></i>Lists</button>
        <Link to="/profile" className="nav-button">
          <i className="fa fa-user-o"></i>Profile
        </Link>
        <button type="button" className="nav-button"><i className="fa fa-caret-down"></i>More</button>
        <button type="button" id="tweetModalButton">Tweet</button>
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
