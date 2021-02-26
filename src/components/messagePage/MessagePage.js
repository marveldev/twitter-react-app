import './messagePage.css'

const MessagePage = () => {
  return (
    <div className="message-page">
      <div>
        <div className="message-header">
          <span>Messages</span>
          <button type="button"><i className="fa fa-envelope-o"></i></button>
        </div>
        <div className="message-page-content">
          <div>
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
          </div>
        </div>
      </div>
      <div className="message-pane">
        <strong>You don’t have a message selected</strong>
        <p>Choose one from your existing messages, or start a new one.</p>
        <button type="button" className="message-button">New message</button>
      </div>
    </div>
  )
}

export default MessagePage
