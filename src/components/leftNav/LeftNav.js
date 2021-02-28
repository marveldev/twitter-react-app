import { Link } from 'react-router-dom'
import { useState } from "react"
import './leftNav.css'

const LeftNav = () => {
  const [pageActive, setPageActive] = useState(false)

  return (
    <div className="left-nav">
      <div className="left-nav-content">
        <span id="logo"><i className="fa">&#xf099;</i></span>
        <Link to="/" className={pageActive ? 'nav-button active' : 'nav-button'}
          onClick={() => setPageActive(true)}>
          <i className="glyphicon glyphicon-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/explore" className={pageActive ? 'nav-button active' : 'nav-button'}
          onClick={() => setPageActive(true)}>
          <i className="fa fa-hashtag"></i>
          <span>Explore</span>
        </Link>
        <Link to="/notification" className={pageActive ? 'nav-button active' : 'nav-button'}
          onClick={() => setPageActive(true)}>
          <i className="fa fa-bell-o"></i>
          <span>Notifications</span>
        </Link>
        <Link to="/messages" className={pageActive ? 'nav-button active' : 'nav-button'}
          onClick={() => setPageActive(true)}>
          <i className="fa fa-envelope-o"></i>
          <span>Messages</span>
        </Link>
        <Link to="/bookmark" className={pageActive ? 'nav-button active' : 'nav-button'}
          onClick={() => setPageActive(true)}>
          <i className="fa fa-bookmark-o"></i>
          <span>Bookmarks</span>
        </Link>
        <Link to="/list" className={pageActive ? 'nav-button active' : 'nav-button'}
          onClick={() => setPageActive(true)}>
          <i className="fa fa-list-alt"></i>
          <span>Lists</span>
        </Link>
        <Link to="/profile"  className={pageActive ? 'nav-button active' : 'nav-button'}
          onClick={() => setPageActive(true)}>
          <i className="fa fa-user-o"></i>
          <span>Profile</span>
        </Link>
        <button type="button" className="more nav-button">
          <i className="fa fa-caret-down"></i>
          <span>More</span>
        </button>
        <button className="tweet-modal-button"><i class="material-icons">&#xe0cb;</i></button>
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
