import '../trendingPane/trendingPane.css'

const trendModal = `
  <div class="trend-modal">
    <button id="closeTrendModalButton">X</button>
    <strong>Trends</strong>
    <div class="set-location">
      <p>Location</p>
      <span>Show content in this location</span>
      <input type="checkbox" />
      <small>When this is on, you'll see what's happening around you right now.</small>
    </div>
    <div class="set-trend">
      <p>Personalization</p>
      <span>Trends for you</span>
      <input type="checkbox" />
      <small>You can personalize trends based on your location and who you follow</small>
    </div>
  </div>
`

const TrendingPane = () => {
  return (
    <div className="trending-pane">
      <i className="fa fa-search"></i>
      <input type="text" className="search-input" placeholder="Search Twitter" />
      <div className="trending-tweets">
        <h4>Trends</h4> 
        <button id="trendButton"><i className="material-icons">&#xe8b8;</i></button>
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
        <div className="current-trend">
          <p>Trending in Nigeria</p>
          <strong>Erica</strong>
          <p>Trending with: Laycon, #BBNaijaLockdown</p>
          <p>128k Tweets</p>
        </div>
      </div>
      {trendModal}
    </div>
  )
}

export default TrendingPane
