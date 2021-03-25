import { useState } from 'react'

const Message = ({ messageData, selectedContact }) => {
  const filteredData = messageData.filter(item => item.contactId === selectedContact)
  const [messageOptions, setMessageOptions] = useState('')

  return (
    filteredData.map(messageItem => (
      <div key={messageItem.id}
        onMouseEnter={() => setMessageOptions(messageItem.id)}
        onMouseLeave={() => setMessageOptions('')}
        className="message-item"
      >
        <div>
          <div className="message-content">
            {messageOptions === messageItem.id && (
              <div id={messageItem.id} className="message-options">
                <p className="fa">&#xf08a;</p>
                <p className="material-icons">&#xe5d3;</p>
              </div>
            )}
            <p className="message">{messageItem.text}</p>
          </div>
          <p className="message-time">Today 12:00 AM✔</p>
        </div>
      </div>
    ))
  )
}

export default Message
