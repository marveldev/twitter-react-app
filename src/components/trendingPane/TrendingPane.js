import { useState } from "react"
import './trendingPane.css'

const TrendingPane = () => {
  const [modalActive, setModalActive] = useState(false)

  const trendModal = (
    <>
      <div onClick={() => setModalActive(false)} className="overlay"></div>
      <div className="trend-modal">
        <button type="button" onClick={() => setModalActive(false)}>
          <i className="material-icons">&#xe5cd;</i>
        </button>
        <h4>Trends</h4>
        <div className="set-trend">
          <p>Location</p>
          <div>
            <div className="checkbox-container">
              <span>Show content in this location</span>
              <label id="container">
                <input type="checkbox" />
                <span id="checkmark"></span>
              </label>
            </div>
            <small>When this is on, you'll see what's happening around you right now.</small>
          </div>
        </div>
        <div className="set-trend">
          <p>Personalization</p>
          <div>
            <div className="checkbox-container">
              <span>Trends for you</span>
              <label id="container">
                <input type="checkbox" />
                <span id="checkmark"></span>
              </label>
            </div>
            <small>You can personalize trends based on your location and who you follow</small>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="trending-pane">
      <i className="fa fa-search"></i>
      <input type="text" className="search-input" placeholder="Search Twitter" />
      <div className="trending-tweets">
        <h4>Trends</h4>
        <button type="button" onClick={() => setModalActive(true)}><i className="material-icons">&#xe8b8;</i></button>
        <div className="current-trend">
          <p>Trending in Nigeria</p>
          <strong>Erica</strong>
          <p>Trending with: Laycon, #BBNaijaLockdown</p>
          <p>128k Tweets</p>
        </div>
        <div className="current-trend">
          <p>Trending in Nigeria</p>
          <strong>Rema</strong>
          <p>Trending with: Laycon, #BBNaijaLockdown</p>
          <p>28.1k Tweets</p>
        </div>
        <div className="current-trend">
          <p>Trending in Nigeria</p>
          <strong>#bobrisky</strong>
          <p>12.5k Tweets</p>
        </div>
        <div className="current-trend">
          <p>Trending in Nigeria</p>
          <strong>Tosin</strong>
          <p>Trending with: Laycon, #BBNaijaLockdown</p>
          <p>2,833 Tweets</p>
        </div>
        <div className="current-trend">
          <p>Trending in Nigeria</p>
          <strong>#FreeSomto</strong>
          <p>Trending with: Laycon, #BBNaijaLockdown</p>
          <p>2,282 Tweets</p>
        </div>
        <div className="current-trend">
          <p>Trending in Nigeria</p>
          <strong>Erica</strong>
          <p>Trending with: Laycon, #BBNaijaLockdown</p>
          <p>128k Tweets</p>
        </div>
        <div className="current-trend">
          <p>Trending in Nigeria</p>
          <strong>Erica</strong>
          <p>Trending with: Laycon, #BBNaijaLockdown</p>
          <p>128k Tweets</p>
        </div>
      </div>
      { modalActive && trendModal }
    </div>
  )
}

export default TrendingPane
