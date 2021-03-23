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
      <div>
        <div className="contact-list">
          <img src="https://images.pexels.com/photos/2703463/pexels-photo-2703463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Daniella Thompson</strong>
            </div>
            <p>
              Bad Habits you should break as a developer!
            </p>
          </div>
        </div>
        <div className="contact-list">
          <img src="https://images.pexels.com/photos/2703463/pexels-photo-2703463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Daniella Thompson</strong>
            </div>
            <p>
              Bad Habits you should break as a developer!
            </p>
          </div>
        </div>
        <div className="contact-list">
          <img src="https://images.pexels.com/photos/2703463/pexels-photo-2703463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Daniella Thompson</strong>
            </div>
            <p>
              Bad Habits you should break as a developer!
            </p>
          </div>
        </div>
        <div className="contact-list">
          <img src="https://images.pexels.com/photos/2703463/pexels-photo-2703463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Daniella Thompson</strong>
            </div>
            <p>
              Bad Habits you should break as a developer!
            </p>
          </div>
        </div>
        <div className="contact-list">
          <img src="https://images.pexels.com/photos/2703463/pexels-photo-2703463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Daniella Thompson</strong>
            </div>
            <p>
              Bad Habits you should break as a developer!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ContactPage, InitialContactPage }
