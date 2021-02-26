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
          <i className="glyphicon glyphicon-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/explore" className="nav-button explore"
          onClick={() => addActiveClass('.explore')}>
          <i className="fa fa-hashtag"></i>
          <span>Explore</span>
        </Link>
        <Link to="/notification" className="nav-button notification"
          onClick={() => addActiveClass('.notification')}>
          <i className="fa fa-bell-o"></i>
          <span>Notifications</span>
        </Link>
        <Link to="/messages" className="nav-button messages"
          onClick={() => addActiveClass('.messages')}>
          <i className="fa fa-envelope-o"></i>
          <span>Messages</span>
        </Link>
        <Link to="/bookmark" className="bookmarks nav-button"
          onClick={() => addActiveClass('.bookmarks')}>
          <i className="fa fa-bookmark-o"></i>
          <span>Bookmarks</span>
        </Link>
        <Link to="/list" className="lists nav-button" onClick={() => addActiveClass('.lists')}>
          <i className="fa fa-list-alt"></i>
          <span>Lists</span>
        </Link>
        <Link to="/profile" className="nav-button profile"
          onClick={() => addActiveClass('.profile')}>
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
