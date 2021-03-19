import { Link } from 'react-router-dom'

const DropDownModal = ({ setDropDownDisplay, setDisplayModal }) => {
  return (
    <>
      <div className="overlay" style={{backgroundColor: "#110d0d0a"}}
        onClick={() => setDropDownDisplay(false)}
      >
      </div>
      <div className="dropdown-content">
        <button className="dropdown-button">
          <i className="material-icons">&#xe8e1;</i>
          Topics
        </button>
        <button className="dropdown-button">
          <i className="fa fa-bolt"></i>
          Moments
        </button>
        <button className="dropdown-button">
          <i className="fa fa-external-link-square"></i>
          Twitter Ads
        </button>
        <button className="dropdown-button">
          <i className="fa fa-bar-chart"></i>
          Analytics
        </button>
        <Link to='./settings'
          className="dropdown-button"
          onClick={() => setDropDownDisplay(false)}
        >
          <i className="material-icons">&#xe8b8;</i>
          Settings and privacy
        </Link>
        <button className="dropdown-button">
          <i className="fa fa-question-circle-o"></i>
          Help Center
        </button>
        <button className="dropdown-button"
          onClick={() => {setDisplayModal(true); setDropDownDisplay(false)}}
        >
          <i className="material-icons">&#xe3ae;</i>
          Display
        </button>
      </div>
    </>
  )
}

export default DropDownModal
