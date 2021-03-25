import ChatSection from './ChatSection'
import ContactSection from "./ContactSection"
import './messagePage.css'

const MessagePage = ({ messageData, setMessageData, selectedContact, setSelectedContact }) => {
  return (
    <div className="message-page">
      <div id="contactSection">
        <div className="headline">
          <span>Messages</span>
          <button type="button"><i className="fa fa-envelope-o"></i></button>
        </div>
        <div className="message-contact-page">
          <ContactSection
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        </div>
      </div>
      <div className="current-message-section">
        <ChatSection
          messageData={messageData}
          setMessageData={setMessageData}
          selectedContact={selectedContact}
        />
      </div>
    </div>
  )
}

export default MessagePage
