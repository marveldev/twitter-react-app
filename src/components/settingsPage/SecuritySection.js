const SecuritySection = () => {
  return (
    <div className="security-section">
      <div className="section header">
        <span>Security and account access</span>
      </div>
      <div className="section-content">
        <div>
          <span>Manage your account’s security and keep track of your account’s
            usage including apps that you have connected to your account.
          </span>
        </div>
        <button type="button" className="button">
          <p className="material-icons">&#xe899;</p>
          <div>
            <p>Security</p>
            <span>Manage your account's security</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button type="button" className="button">
          <p className="material-icons">&#xe14d;</p>
          <div>
            <p>Apps and sessions</p>
            <span>See information about when you logged
              into your account and the apps you connected to your account.
            </span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
      </div>
    </div>
  )
}

export default SecuritySection
