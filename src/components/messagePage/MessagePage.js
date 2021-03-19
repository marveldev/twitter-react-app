import './messagePage.css'
import { InitialContactPage } from "./ContactPage"
import { InitialMessageSection } from './MessageSection'

const MessagePage = () => {
  return (
    <div className="message-page">
      <div>
        <div className="headline">
          <span>Messages</span>
          <button type="button"><i className="fa fa-envelope-o"></i></button>
        </div>
        <div className="message-contact-page">
          <InitialContactPage/>
        </div>
      </div>
      <div className="current-message-section">
        <InitialMessageSection/>
      </div>
    </div>
  )
}

export default MessagePage
