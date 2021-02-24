import { Link } from 'react-router-dom'
import './leftNav.css'

const LeftNav = () => {
  const addActiveClass = (element) => {
    document.querySelector('.active').classList.remove('active')
    document.querySelector(element).classList.add('active')
  }

  return (
    <div className="left-nav">
      <div className="left-nav-content">
        <span id="logo"><i className="fa">&#xf099;</i></span>
        <Link to="/" className="nav-button home active" onClick={() => addActiveClass('.home')}> 
          <i className="glyphicon glyphicon-home"></i>Home
        </Link>
        <Link to="/explore" className="nav-button explore"
          onClick={() => addActiveClass('.explore')}>
          <i className="fa fa-hashtag"></i>Explore
        </Link>
        <Link to="/notification" className="nav-button notification"
          onClick={() => addActiveClass('.notification')}>
          <i className="fa fa-bell-o"></i>Notifications
        </Link>
        <Link to="/messages" className="nav-button messages"
          onClick={() => addActiveClass('.messages')}>
          <i className="fa fa-envelope-o"></i>Messages
        </Link>
        <Link to="/bookmark" className="nav-button bookmarks"
          onClick={() => addActiveClass('.bookmarks')}>
          <i className="fa fa-bookmark-o"></i>Bookmarks
        </Link>
        <Link to="/list" className="nav-button lists" onClick={() => addActiveClass('.lists')}>
          <i className="fa fa-list-alt"></i>Lists
        </Link>
        <Link to="/profile" className="nav-button profile"
          onClick={() => addActiveClass('.profile')}>
          <i className="fa fa-user-o"></i>Profile
        </Link>
        <button type="button" className="nav-button">
          <i className="fa fa-caret-down"></i>More
        </button>
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
