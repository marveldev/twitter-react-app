import './settingsPage.css'

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <div className="headline">
        <span>Settings</span>
      </div>
      <div className="settings page-core">
        <button type="button" className="current-section">
          <span>Your account</span>
          <i class="material-icons">&#xe315;</i>
        </button>
        <button type="button">
          <span>Security and account access</span>
          <i class="material-icons">&#xe315;</i>
        </button>
        <button type="button">
          <span>Privacy and safety</span>
          <i class="material-icons">&#xe315;</i>
        </button>
        <button type="button">
          <span>Notifications</span>
          <i class="material-icons">&#xe315;</i>
        </button>
        <button type="button">
          <span>Accessibility, display, and languages</span>
          <i class="material-icons">&#xe315;</i>
        </button>
        <button type="button">
          <span>Additional resources</span>
          <i class="material-icons">&#xe315;</i>
        </button>
      </div>
    </div>
  )
}

export default SettingsPage
