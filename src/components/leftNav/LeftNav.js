import { useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import TweetModal from './TweetModal'
import DisplayModal from './DisplayModal'
import DropDownModal from './DropDownModal'
import './leftNav.css'

const LeftNav = ({
  theme, setTheme, textColor, setTextColor,
  tweetData, setTweetData, setActivePage, bioData
}) => {
  const [tweetModalDisplay, setTweetModalDisplay] = useState(false)
  const [dropDownDisplay, setDropDownDisplay] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const { location } = useHistory()
  const { pathname } = location
  const bio = bioData[0]

  return (
    <div className="left-nav">
      <div className="left-nav-content">
        <span id="logo"><i className="fa">&#xf099;</i></span>
        <Link to="/"
          className="nav-button" id={pathname === '/' ? 'active' : ''}
          onClick={() => setActivePage('/')}
        >
          <i className="glyphicon glyphicon-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/explore"
          className="nav-button" id={pathname === '/explore' ? 'active' : ''}
          onClick={() => setActivePage('/explore')}
        >
          <i className="fa fa-hashtag"></i>
          <span>Explore</span>
        </Link>
        <Link to="/notification"
          className="nav-button" id={pathname === '/notification' ? 'active' : ''}
          onClick={() => setActivePage('/notification')}
        >
          <i className="fa fa-bell-o"></i>
          <span>Notifications</span>
        </Link>
        <Link to="/messages"
          className="nav-button" id={pathname === '/messages' ? 'active' : ''}
          onClick={() => setActivePage('/messages')}
        >
          <i className="fa fa-envelope-o"></i>
          <span>Messages</span>
        </Link>
        <Link to="/bookmark"
          className="nav-button" id={pathname === '/bookmark' ? 'active' : ''}
          onClick={() => setActivePage('/bookmark')}
        >
          <i className="fa fa-bookmark-o"></i>
          <span>Bookmarks</span>
        </Link>
        <Link to="/list"
          className="nav-button" id={pathname === '/list' ? 'active' : ''}
          onClick={() => setActivePage('/list')}
        >
          <i className="fa fa-list-alt"></i>
          <span>Lists</span>
        </Link>
        <Link to="/profile"
          className="nav-button" id={pathname === '/profile' ? 'active' : ''}
          onClick={() => setActivePage('/profile')}
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
          <img src={bio?.profilePhoto} className="left-nav-photo" alt="user-profile" />
          <span>{bio?.name}</span>
        </div>
      </div>
      { tweetModalDisplay &&
        <TweetModal
          setTweetModalDisplay={setTweetModalDisplay}
          tweetData={tweetData}
          setTweetData={setTweetData}
          bio={bio}
        />
      }
      { dropDownDisplay &&
        <DropDownModal
          setDropDownDisplay={setDropDownDisplay}
          setDisplayModal={setDisplayModal}
        />
      }
      { displayModal &&
        <DisplayModal
          setDisplayModal={setDisplayModal}
          theme={theme}
          setTheme={setTheme}
          textColor={textColor}
          setTextColor={setTextColor}
        />
      }
    </div>
  )
}

export default LeftNav
