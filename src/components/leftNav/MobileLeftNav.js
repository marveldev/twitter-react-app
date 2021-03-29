import { Link } from 'react-router-dom'
import { CONSTANTS } from '../common/constants'

const MobileLeftNav = ({ setMobileLeftNav, bio }) => {
  return (
    <>
      <div className="overlay" onClick={() => setMobileLeftNav(false)}></div>
      <div className="mobile-left-nav">
        <div className="headline">
          <span>Account info</span>
          <button
            onClick={() => setMobileLeftNav(false)}
            type="button"
          >
            <i className="material-icons">&#xe5cd;</i>
          </button>
        </div>
        <div id="mobileLeftNav">
          <div className="user-profile">
            <img src={bio?.profilePhoto || CONSTANTS.PHOTOURL}
              className="left-nav-photo" alt="user-profile" />
            <strong>{bio?.name || CONSTANTS.NAME}</strong>
            <div>
              <span><strong>38</strong> Following</span>
              <span><strong>17</strong> Followers</span>
            </div>
          </div>
          <Link to="/profile" className="dropdown-button">
            <i className="fa fa-user-o"></i>
            <span>Profile</span>
          </Link>
          <Link to="/list" className="dropdown-button">
            <i className="fa fa-list-alt"></i>
            <span>Lists</span>
          </Link>
          <button className="dropdown-button">
            <i className="material-icons">&#xe8e1;</i>
            Topics
          </button>
          <Link to="/bookmark" className="dropdown-button">
            <i className="fa fa-bookmark-o"></i>
            <span>Bookmarks</span>
          </Link>
          <button className="dropdown-button"><i className="fa fa-bolt"></i>Moments</button>
          <button className="dropdown-button">
            <i className="fa fa-external-link-square"></i>
            Twitter Ads
          </button>
          <button className="dropdown-button">
            <i className="fa fa-bar-chart"></i>
            Analytics
          </button>
          <Link to='./settings' className="dropdown-button">
            <i className="material-icons">&#xe8b8;</i>
            Settings and privacy
          </Link>
          <button className="dropdown-button">
            <i className="fa fa-question-circle-o"></i>
            Help Center
          </button>
          <button className="dropdown-button">
            <i className="material-icons">&#xe3ae;</i>
            Display
          </button>
          <button className="dropdown-button">Log out</button>
        </div>
      </div>
    </>
  )
}

export default MobileLeftNav
