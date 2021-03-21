import Message from "./Message.js";

const InitialMessageSection = () => {
  return (
    <div className="initial-message-section">
      <strong>You don’t have a message selected</strong>
      <p>Choose one from your existing messages, or start a new one.</p>
      <button type="button" className="message-button">New message</button>
    </div>
  )
}

const MessageSection = ({ messageData, setMessageData }) => {
  const addMessageData = () => {
    const text = document.querySelector('#messageBox').value
    const id = 'id' + Date.parse(new Date()).toString()
    const messageObject = {
      text,
      id
    }

    setMessageData([...messageData, messageObject])
  }

  return (
    <div className="message-section">
      <div className="section-header">
        <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" className="home-page-photo" alt="user-profile" />
        <strong>Danny Thompson</strong>
        <span className="material-icons">&#xe88f;</span>
      </div>
      <div id="sectionContent">
        <div className="message-container">
          <Message
            messageData={messageData}
            setMessageData={setMessageData}
          />
        </div>
        <form>
          <span className="fa fa-file-picture-o"></span>
          <span className="fa fa-git-square"></span>
          <textarea id="messageBox" placeholder="Start a new message"></textarea>
          <span className="fa fa-smile-o smiley-icon"></span>
          <span onClick={() => addMessageData()} className="material-icons send-icon">
            &#xe163;
          </span>
        </form>
      </div>
    </div>
  )
}

export { InitialMessageSection, MessageSection }
