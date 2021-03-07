const AccountSection = () => {
  return (
    <div className="account-section">
      <div className="section header">
        <button type="button" className="previous-button">
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <span>Your Account</span>
      </div>
      <div className="section-content">
        <div>
          <span>See information about your account, download an archive of your data,
            or learn about your account deactivation options
          </span>
        </div>
        <button type="button" className="button">
          <p className="fa fa-user-o "></p>
          <div>
            <p>Account information</p>
            <span>See your information like your phone number and email address.</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button type="button" className="button">
          <p className="material-icons">&#xe0da;</p>
          <div>
            <p>Change your password</p>
            <span>Change your password at any time.</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button type="button" className="button">
          <p className="fa">&#xf019;</p>
          <div>
            <p>Download an archive of your data</p>
            <span>Get insights inot the type of information stored for your account</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button type="button" className="button">
          <p className="material-icons">&#xe7fc;</p>
          <div>
            <p>TweetDeck's Team</p>
            <span>Invite anyone to Tweet from this account using TweetDeck's Teams.</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
        <button type="button" className="button">
          <p className="fa fa-heart-o"></p>
          <div>
            <p>Deactivate your account</p>
            <span>Find out how you can deactivate your account</span>
          </div>
          <i className="material-icons">&#xe315;</i>
        </button>
      </div>
    </div>
  )
}

export default AccountSection
