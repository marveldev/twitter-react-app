const Message = ({ messageData }) => {
  const openMessageOptions = (selector) => {
    document.querySelector(`#${selector}`).style.visibility = 'visible'
  }

  const closeMessageOptions = (selector) => {
    document.querySelector(`#${selector}`).style.visibility = 'hidden'
  }

  return (
    messageData.map(messageItem => (
      <div key={messageItem.id}
        onMouseOver={() => openMessageOptions(messageItem.id)}
        onMouseOut= {() => closeMessageOptions(messageItem.id)}
        className="message-item"
      >
        <div>
          <div className="message-content">
            <div id={messageItem.id} className="message-options">
              <p className="fa">&#xf08a;</p>
              <p className="material-icons">&#xe5d3;</p>
            </div>
            <p className="message">{messageItem.text}</p>
          </div>
          <p className="message-time">Today 12:00 AM✔</p>
        </div>
      </div>
    ))
  )
}

export default Message