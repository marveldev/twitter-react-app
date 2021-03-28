const Message = ({ messageData, selectedContact, setChatDropdown, setSelectedMessageId }) => {
  const filteredData = messageData.filter(item => item.selectedContact.id === selectedContact.id)

  const openMessageOptions = (selector) => {
    document.querySelector(`#${selector}`).style.visibility = 'visible'
  }

  const closeMessageOptions = (selector) => {
    document.querySelector(`#${selector}`).style.visibility = 'hidden'
  }

  const openTweetDropdown = (event, id) => {
    const top = event.clientY
    setChatDropdown({isActive: true, top: (top + 'px')})
    setSelectedMessageId(id)
  }

  return (
    filteredData.map(messageItem => (
      <div key={messageItem.messageId}
        onMouseOver={() => openMessageOptions(messageItem.messageId) }
        onMouseOut= {() => closeMessageOptions(messageItem.messageId)}
        className="message-item"
      >
        <div>
          <div className="message-content">
            <div id={messageItem.messageId} className="message-options">
              <p className="fa">&#xf08a;</p>
              <p onClick={(event) => openTweetDropdown(event, messageItem.messageId)}
                className="material-icons"
              >
                &#xe5d3;
              </p>
            </div>
            <p className="message">{messageItem.text}</p>
          </div>
          <p className="message-time">Today at {messageItem.chatTime}✔</p>
        </div>
      </div>
    ))
  )
}

export default Message
