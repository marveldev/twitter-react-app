import { Link } from 'react-router-dom'
import { useState } from "react"
import TweetModal from './TweetModal'
import './leftNav.css'

const LeftNav = () => {
  const [activeNav, setActiveNav] = useState('')
  const [tweetModalDisplay, setTweetModalDisplay] = useState(false)
  const [dropDownDisplay, setDropDownDisplay] = useState(false)

  const dropDownModal = (
    <>
      <div className="overlay" style={{backgroundColor: "#110d0d0a"}}
        onClick={() => setDropDownDisplay(false)}
      >
      </div>
      <div className="dropdown-content">
        <button className="dropdown-button"><i className="material-icons">&#xe8e1;</i>Topics</button>
        <button className="dropdown-button"><i className="fa fa-bolt"></i>Moments</button>
        <button className="dropdown-button"><i className="fa fa-external-link-square"></i>Twitter Ads</button>
        <button className="dropdown-button"><i className="fa fa-bar-chart"></i>Analytics</button>
        <Link to='./settings'
          className="dropdown-button"
          onClick={() => setDropDownDisplay(false)}
        >
          <i className="material-icons">&#xe8b8;</i>
          Settings and privacy
        </Link>
        <button className="dropdown-button"><i className="fa fa-question-circle-o"></i>Help Center</button>
        <button className="dropdown-button"><i className="material-icons">&#xe3ae;</i>Display</button>
      </div>
    </>
  )

  return (
    <div className="left-nav">
      <div className="left-nav-content">
        <span id="logo"><i className="fa">&#xf099;</i></span>
        <Link to="/" className={activeNav === 'home' ? 'nav-button active' : 'nav-button'}
          onClick={() => setActiveNav('home')}>
          <i className="glyphicon glyphicon-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/explore"
          className={activeNav === 'explore' ? 'nav-button active' : 'nav-button'}
          onClick={() => setActiveNav('explore')}
        >
          <i className="fa fa-hashtag"></i>
          <span>Explore</span>
        </Link>
        <Link to="/notification"
          className={activeNav === 'notification' ? 'nav-button active' : 'nav-button'}
          onClick={() => setActiveNav('notification')}
        >
          <i className="fa fa-bell-o"></i>
          <span>Notifications</span>
        </Link>
        <Link to="/messages"
          className={activeNav === 'messages' ? 'nav-button active' : 'nav-button'}
          onClick={() => setActiveNav('messages')}
        >
          <i className="fa fa-envelope-o"></i>
          <span>Messages</span>
        </Link>
        <Link to="/bookmark"
          className={activeNav === 'bookmark' ? 'nav-button active' : 'nav-button'}
          onClick={() => setActiveNav('bookmark')}
        >
          <i className="fa fa-bookmark-o"></i>
          <span>Bookmarks</span>
        </Link>
        <Link to="/list"
          className={activeNav === 'list' ? 'nav-button active' : 'nav-button'}
          onClick={() => setActiveNav('list')}
        >
          <i className="fa fa-list-alt"></i>
          <span>Lists</span>
        </Link>
        <Link to="/profile"
          className={activeNav === 'profile' ? 'nav-button active' : 'nav-button'}
          onClick={() => setActiveNav('profile')}
        >
          <i className="fa fa-user-o"></i>
          <span>Profile</span>
        </Link>
        <button type="button" className="nav-button" onClick={() => setDropDownDisplay(true)}>
          <i className="fa fa-caret-down"></i>
          <span>More</span>
        </button>
        <button className="tweet-modal-button" onClick={() => setTweetModalDisplay(true)}>
          <i className="material-icons">&#xe0cb;</i>
        </button>
        <button type="button" id="tweetModalButton" onClick={() => setTweetModalDisplay(true)}>
          Tweet
        </button>
        <div className="user-info">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
            className="left-nav-photo" alt="user-profile" />
          <span>Jane Doe</span>
        </div>
      </div>
      { tweetModalDisplay &&
        <TweetModal
          setTweetModalDisplay={setTweetModalDisplay}
        />
      }
      { dropDownDisplay && dropDownModal }
    </div>
  )
}

export default LeftNav
