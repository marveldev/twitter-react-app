const InitialMessageSection = () => {
  return (
    <div className="initial-message-section">
      <strong>You don’t have a message selected</strong>
      <p>Choose one from your existing messages, or start a new one.</p>
      <button type="button" className="message-button">New message</button>
    </div>
  )
}

const MessageSection = () => {
  return (
    <>
      <div className="message-section">
        <div className="section-header">
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="user-profile" />
          <strong>Danny Thompson</strong>
          <span class="material-icons">&#xe88f;</span>
        </div>
        <div className="section-content">
          <div className="message-container">
            <h1>hello</h1>
          </div>
          <form>
            <span className="fa fa-file-picture-o"></span>
            <span className="fa fa-git-square"></span>
            <textarea placeholder="Start a new message"></textarea>
            <span className="fa fa-smile-o smiley-icon"></span>
            <span className="material-icons send-icon">&#xe163;</span>
          </form>
        </div>
      </div>
    </>
  )
}

export { InitialMessageSection, MessageSection }
