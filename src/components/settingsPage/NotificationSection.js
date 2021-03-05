const NotificationSection = () => {
  return (
    <div className="notification-section">
      <div className="section header">
        <span>Notifications</span>
      </div>
      <div className="section-content">
      <div>
          <span>Select the kinds of notifications you get about your
            activities, interests, and recommendations.
          </span>
        </div>
        <button type="button" className="button">
          <p className="material-icons">&#xe152;</p>
          <div>
            <p>Filters</p>
            <span>Choose the notification you'd like to see — and those you don't.</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button type="button" className="button">
          <p className="material-icons">&#xe0dd;</p>
          <div>
            <p>Preferences</p>
            <span>Select your preferences by notification type.</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
      </div>
    </div>
  )
}

export default NotificationSection
