import './messagePage.css'
import { ContactPage } from "./ContactPage"
import { MessageSection } from './MessageSection'

const MessagePage = ({ messageData, setMessageData }) => {
  return (
    <div className="message-page">
      <div>
        <div className="headline">
          <span>Messages</span>
          <button type="button"><i className="fa fa-envelope-o"></i></button>
        </div>
        <div className="message-contact-page">
          <ContactPage/>
        </div>
      </div>
      <div className="current-message-section">
        <MessageSection
          messageData={messageData}
          setMessageData={setMessageData}
        />
      </div>
    </div>
  )
}

export default MessagePage
