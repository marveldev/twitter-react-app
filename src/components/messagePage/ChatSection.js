import Message from './Message'

const InitialChatSection = () => {
  return (
    <div className="initial-message-section">
      <strong>You don’t have a message selected</strong>
      <p>Choose one from your existing messages, or start a new one.</p>
      <button type="button" className="message-button">New message</button>
    </div>
  )
}

const ChatSection = ({ messageData, setMessageData, selectedContact }) => {
  const addMessageData = () => {
    const text = document.querySelector('#messageBox').value
    const id = 'id' + Date.parse(new Date()).toString()
    const chatTime =
      new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const messageObject = {
      text,
      id,
      chatTime,
      contactId: selectedContact
    }

    setMessageData([...messageData, messageObject])
  }

  const inputEventHandler = event => {
    const inputValue = document.querySelector('#messageBox').value
    if (inputValue.trim().length >= 1) {
      document.querySelector('.send-button').classList.add('allow')
      if (event.which === 13) {
        addMessageData()
      }
    } else {
      document.querySelector('.send-button').classList.remove('allow')
    }
  }

  const displayContactSection = () => {
    document.querySelector('.message-contact-page').style.display = 'block'
    document.querySelector('.current-message-section').style.display = 'none'
  }

  return (
    <>
      {!selectedContact && <InitialChatSection />}
      {selectedContact && (
        <div className="message-section">
          <div className="section-header">
            <button type="button" onClick={displayContactSection} className="previous-button">
              <i className="material-icons">&#xe5c4;</i>
            </button>
            <img src={selectedContact.photoUrl}
              className="home-page-photo" alt="user-profile"
            />
            <strong>{selectedContact.name}</strong>
            <span className="material-icons">&#xe88f;</span>
          </div>
          <div id="sectionContent">
            <div className="message-container">
              <Message
                messageData={messageData}
                selectedContact={selectedContact}
              />
            </div>
            <form>
              <span className="fa fa-file-picture-o"></span>
              <span className="fa fa-git-square"></span>
              <textarea
                onKeyUp={(event) => inputEventHandler(event)}
                id="messageBox" placeholder="Start a new message" autoFocus
              >
              </textarea>
              <span className="fa fa-smile-o smiley-icon"></span>
              <button onClick={() => addMessageData()} className="material-icons send-button">
                &#xe163;
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export { InitialChatSection, ChatSection }
