import { Link } from 'react-router-dom'
import { useState } from "react"
import './leftNav.css'

const LeftNav = () => {
  const [pageActive, setPageActive] = useState(false)
  const [tweetModalDisplay, setTweetModalDisplay] = useState(false)
  const [dropDownDisplay, setDropDownDisplay] = useState(false)

  const tweetModal = (
    <>
      <div className="overlay"></div>
      <div className="tweet-modal">
        <div className="tweet-modal-header">
          <button type="button" onClick={() => setTweetModalDisplay(false)}>X</button>
        </div>
        <div id="tweetContainer">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
            className="home-page-photo" alt="photo" />
          <div>
            <div>
              <textarea className="home-tweet-input" placeholder="What's happening?"></textarea>
              <strong>Everyone can reply</strong>
            </div>
            <div className="tweet-options">
              <div>
                <input type="file" id="addPhoto" />
                <label for="addPhoto">
                  <span><i className="fa fa-file-picture-o" id="photoIcon"></i></span>
                </label>
                <span><i className="fa fa-git-square"></i></span>
                <span><i className="fa fa-bar-chart"></i></span>
                <span><i className="fa fa-smile-o"></i></span>
                <span><i className="fa fa-calendar-plus-o"></i></span>
              </div>
              <button type="button" className="add-tweet-button">Tweet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const dropDownModal = (
    <>
      <div className="overlay" style={{backgroundColor: "#110d0d0a"}} onClick={() => setDropDownDisplay(false)}></div>
      <div className="dropdown-content">
        <button><i className="material-icons">&#xe8e1;</i>Topics</button>
        <button><i className="fa fa-bolt"></i>Moments</button>
        <button><i className="fa fa-external-link-square"></i>Twitter Ads</button>
        <button><i className="fa fa-bar-chart"></i>Analytics</button>
        <button><i className="material-icons">&#xe8b8;</i>Settings and privacy</button>
        <button><i className="fa fa-question-circle-o"></i>Help Center</button>
        <button><i className="material-icons">&#xe3ae;</i>Display</button>
      </div>
    </>
  )

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
        <button type="button" className="nav-button" onClick={() => setDropDownDisplay(true)}>
          <i className="fa fa-caret-down"></i>
          <span>More</span>
        </button>
        <button className="tweet-modal-button"><i className="material-icons">&#xe0cb;</i></button>
        <button type="button" id="tweetModalButton" onClick={() => setTweetModalDisplay(true)}>Tweet</button>
        <div className="user-info">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
            className="left-nav-photo" alt="photo" />
          <span>Jane Doe</span>
        </div>
      </div>
      { tweetModalDisplay && tweetModal }
      { dropDownDisplay && dropDownModal }
    </div>
  )
}

export default LeftNav
