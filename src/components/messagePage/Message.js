const Message = ({ messageData, selectedContact, setChatDropdown }) => {
  const filteredData = messageData.filter(item => item.contactId === selectedContact)
  
  const openMessageOptions = (selector) => {
    document.querySelector(`#${selector}`).style.visibility = 'visible'
  }

  const closeMessageOptions = (selector) => {
    document.querySelector(`#${selector}`).style.visibility = 'hidden'
  }

  const openTweetDropdown = event => {
    const top = event.clientY
    setChatDropdown({isActive: true, top: (top + 'px')})
  }

  return (
    filteredData.map(messageItem => (
      <div key={messageItem.id}
        onMouseOver={() => openMessageOptions(messageItem.id)}
        onMouseOut= {() => closeMessageOptions(messageItem.id)}
        className="message-item"
      >
        <div>
          <div className="message-content">
            <div id={messageItem.id} className="message-options">
              <p className="fa">&#xf08a;</p>
              <p onClick={openTweetDropdown} className="material-icons">
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
