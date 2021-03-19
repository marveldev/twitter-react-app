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
    <>
      <div id="searchInputContainer">
        <i className="fa fa-search"></i>
        <input type="text" className="search-input" placeholder="Search for people and groups" />
      </div>
      <div className="contact-page">
        
      </div>
    </>
  )
}

export { ContactPage, InitialContactPage }
