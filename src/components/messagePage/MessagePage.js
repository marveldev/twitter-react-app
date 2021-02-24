import './messagePage.css'

const MessagePage = () => {
  return (
    <div className="message-page">
      <div>
        <div className="header">
          <span>Messages</span>
          <button type="button"><i className="fa fa-envelope-o"></i></button>
        </div>
        <div className="message-page-content">
          <div>
            <i className="fa fa-search"></i>
            <input type="text" className="search-input" placeholder="Search Twitter" />
          </div>
          <div>
            <p>Send a message, get a message</p>
            <p>Direct Messages are private conversations between you and other people on Twitter.
              Share Tweets, media, and more!
            </p>
            <button type="button">Start a conversation</button>
          </div>
        </div>
      </div>
      <div>
        <p>You don’t have a message selected</p>
        <p>Choose one from your existing messages, or start a new one.</p>
        <button type="button">New message</button>
      </div>
    </div>
  )
}

export default MessagePage
