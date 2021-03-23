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
        <div id="current" className="contact-list">
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
          <img src="https://images.pexels.com/photos/2700116/pexels-photo-2700116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Sheila Butter</strong>
            </div>
            <p>
              Live life to the fullest, and focus on the positive.
            </p>
          </div>
        </div>
        <div className="contact-list">
          <img src="https://images.pexels.com/photos/5649341/pexels-photo-5649341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Ego Emmanuel</strong>
            </div>
            <p>
              There is more to life than increasing its speed.
            </p>
          </div>
        </div>
        <div className="contact-list">
          <img src="https://images.pexels.com/photos/4401285/pexels-photo-4401285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Amy Thompson</strong>
            </div>
            <p>
              Love is like the wind, you can't see it but you can feel it.
            </p>
          </div>
        </div>
        <div className="contact-list">
          <img src="https://images.pexels.com/photos/2703463/pexels-photo-2703463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="home-page-photo" alt="user-profile"
          />
          <div>
            <div className="tweet-person">
              <strong>Herman Hesse</strong>
            </div>
            <p>
              Happiness is holding someone in your arms and knowing you hold the whole world.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ContactPage, InitialContactPage }
