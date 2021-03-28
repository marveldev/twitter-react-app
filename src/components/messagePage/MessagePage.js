import './messagePage.css'
import { ContactSection } from "./ContactSection"
import { ChatSection } from './ChatSection'

const MessagePage = ({ messageData, selectedContact, setSelectedContact }) => {
  return (
    <div className="message-page">
      <div>
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
          selectedContact={selectedContact}
        />
      </div>
    </div>
  )
}

export default MessagePage
