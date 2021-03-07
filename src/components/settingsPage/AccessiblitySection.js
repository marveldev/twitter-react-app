const AccessiblitySection = ({ setCurrentSection }) => {
  return (
    <div className="notification-section">
      <div className="section header">
        <span>Accessibility, display and languages</span>
      </div>
      <div className="section-content">
        <div>
          <span>Manage how Twitter content is displayed to you.</span>
        </div>
        <button type="button" className="button">
          <p class="material-icons">&#xe8f5;</p>
          <div>
            <p>Accessibility</p>
            <span>Manage aspects of your Twitter experience such as
              limiting color contrast and motion.
            </span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button
          onClick={() => setCurrentSection('display')}
          type="button" className="button"
        >
          <p class="material-icons">&#xe3ae;</p>
          <div>
            <p>Display</p>
            <span>Manage your font size, color and background. These settings affect
              all the Twitter accounts on this browser.
            </span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button type="button" className="button">
          <p class="material-icons">&#xe894;</p>
          <div>
            <p>Languages</p>
            <span>Manage which languages are used to personalize your Twitter experience.</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button type="button" className="button">
          <p class="material-icons">&#xe24b;</p>
          <div>
            <p>Data usage</p>
            <span>Limit how Twitter uses some of your network data.
              These settings affect all the Twitter accounts on this browser.
            </span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
      </div>
    </div>
  )
}

export default AccessiblitySection
