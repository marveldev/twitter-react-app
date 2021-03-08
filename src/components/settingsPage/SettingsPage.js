import { useState } from 'react'
import AccessiblitySection from './AccessiblitySection'
import AccountSection from './AccountSection'
import DisplaySection from './DisplaySection.js'
import NotificationSection from './NotificationSection'
import PrivacySection from './PrivacySection'
import ResourceSection from './ResourceSection.js'
import SecuritySection from './SecuritySection'
import './settingsPage.css'

const SettingsPage = () => {
  const [currentSection, setCurrentSection] = useState('account')

  const switchCurrentSection = (name) => {
    if (window.innerWidth <= 768) {
      document.querySelector('#settingsPage').style.display = 'none'
      document.querySelector('#currentSection').style.display = 'block'
    }

    setCurrentSection(name)
  }

  return (
    <div className="settings-page">
      <div id="settingsPage">
        <div className="headline">
          <button type="button" className="previous-button"><i className="material-icons">&#xe5c4;</i></button>
          <span>Settings</span>
        </div>
        <div className="settings page-core">
          <button
            onClick={() => switchCurrentSection('account')}
            type="button" className={currentSection === 'account' ? 'current-section' : ''}
          >
            <span>Your account</span>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => switchCurrentSection('security')}
            type="button" className={currentSection === 'security' ? 'current-section' : ''}
          >
            <span>Security and account access</span>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => switchCurrentSection('privacy')}
            type="button" className={currentSection === 'privacy' ? 'current-section' : ''}
          >
            <span>Privacy and safety</span>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => switchCurrentSection('notification')}
            type="button" className={currentSection === 'notification' ? 'current-section' : ''}
          >
            <span>Notifications</span>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => switchCurrentSection('accessibility')}
            type="button" className={currentSection === 'accessibility' ? 'current-section' : ''}
          >
            <span>Accessibility, display, and languages</span>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => switchCurrentSection('resource')}
            type="button" className={currentSection === 'resource' ? 'current-section' : ''}
          >
            <span>Additional resources</span>
            <i className="material-icons">&#xe315;</i>
          </button>
        </div>
      </div>
      <div id="currentSection">
        {currentSection === 'account' && <AccountSection />}
        {currentSection === 'security' && <SecuritySection />}
        {currentSection === 'notification' && <NotificationSection />}
        {currentSection === 'accessibility' &&
          <AccessiblitySection setCurrentSection={setCurrentSection} />
        }
        {currentSection === 'privacy' && <PrivacySection />}
        {currentSection === 'resource' && <ResourceSection />}
        {currentSection === 'display' && <DisplaySection />}
      </div>
    </div>
  )
}

export default SettingsPage
