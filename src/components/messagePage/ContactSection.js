import contactList from './contactList'

const ContactSection = ({ selectedContact, setSelectedContact }) => {

  return (
    <div className="contact-section">
      <div id="searchInputContainer">
        <i className="fa fa-search"></i>
        <input type="text" className="search-input" placeholder="Search for people and groups" />
      </div>
      <div>
        {contactList.map(contact => (
          <div id={selectedContact === contact.id ? 'current' : ''}
            className="contact-list" onClick={() => setSelectedContact(contact)}
          >
            <img src={contact.photoUrl} className="home-page-photo" alt="user-profile"
            />
            <div>
              <div className="tweet-person">
                <strong>{contact.name}</strong>
              </div>
            </div>
          </div>
          ))
        }
        </div>
    </div>
  )
}

export { ContactSection }
