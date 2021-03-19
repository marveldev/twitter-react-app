const InitialContactPage = () => {
  return (
    <>
      <div id="searchInputContainer">
        <i className="fa fa-search"></i>
        <input type="text" className="search-input" placeholder="Search for people and groups" />
      </div>
      <div id="messageInfo">
        <strong>Send a message, get a message</strong>
        <p>Direct Messages are private conversations between you and other people on Twitter.
          Share Tweets, media, and more!
        </p>
        <button type="button" className="message-button">Start a conversation</button>
      </div>
    </>
  )
}

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div id="searchInputContainer">
        <i className="fa fa-search"></i>
        <input type="text" className="search-input" placeholder="Search for people and groups" />
      </div>
      <div className="contact-list">
        <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="user-profile" />
        <div>
          <div className="tweet-person">
            <strong>Danny Thompson</strong>
          </div>
          <p>
            Bad Habits you should break as a developer!
          </p>
        </div>
      </div>
    </div>
  )
}

export { ContactPage, InitialContactPage }
