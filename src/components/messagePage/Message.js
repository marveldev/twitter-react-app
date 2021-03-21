const Message = ({ messageData }) => {
  // const displayMessageOptions = () => {

  // }

  return (
    messageData.map(messageItem => (
      <div key={messageItem.id} className="message-item">
        <div>
          <div className="message-content">
            <div className="message-options">
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
