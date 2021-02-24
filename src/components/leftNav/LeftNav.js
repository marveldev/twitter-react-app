import { Link } from 'react-router-dom'
import './leftNav.css'

const LeftNav = () => {
  return (
    <div className="left-nav">
      <div className="left-nav-content">
        <span id="logo"><i class="fa">&#xf099;</i></span>
        <Link to="/" className="nav-button active">
          <i class="glyphicon glyphicon-home"></i>Home
        </Link>
        <Link to="/explore" className="nav-button">
          <i class="fa fa-hashtag"></i>Explore
        </Link>
        <Link to="/notification" className="nav-button">
          <i class="fa fa-bell-o"></i>Notifications
        </Link>
        <button type="button" className="nav-button"><i class="fa fa-envelope-o"></i>Messages</button>
        <Link to="/bookmark" className="nav-button">
          <i class="fa fa-bookmark-o"></i>Bookmarks
        </Link>
        <Link to="/list" className="nav-button">
          <i class="fa fa-list-alt"></i>Lists
        </Link>
        <Link to="/profile" className="nav-button">
          <i class="fa fa-user-o"></i>Profile
        </Link>
        <button type="button" className="nav-button"><i class="fa fa-caret-down"></i>More</button>
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
