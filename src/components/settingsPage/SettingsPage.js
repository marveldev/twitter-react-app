import { useState } from 'react'
import AccessiblitySection from './AccessiblitySection'
import AccountSection from './AccountSection'
import NotificationSection from './NotificationSection'
import PrivacySection from './PrivacySection'
import ResourceSection from './ResourceSection.js'
import SecuritySection from './SecuritySection'
import './settingsPage.css'

const SettingsPage = () => {
  const [currentSection, setCurrentSection] = useState('account')
  return (
    <div className="settings-page">
      <div>
        <div className="headline">
          <span>Settings</span>
        </div>
        <div className="settings page-core">
          <button
            onClick={() => setCurrentSection('account')}
            type="button" className={currentSection === 'account' ? 'current-section' : ''}
          >
            <span>Your account</span>
            <i class="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => setCurrentSection('security')}
            type="button" className={currentSection === 'security' ? 'current-section' : ''}
          >
            <span>Security and account access</span>
            <i class="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => setCurrentSection('privacy')}
            type="button" className={currentSection === 'privacy' ? 'current-section' : ''}
          >
            <span>Privacy and safety</span>
            <i class="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => setCurrentSection('notification')}
            type="button" className={currentSection === 'notification' ? 'current-section' : ''}
          >
            <span>Notifications</span>
            <i class="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => setCurrentSection('accessibility')}
            type="button" className={currentSection === 'accessibility' ? 'current-section' : ''}
          >
            <span>Accessibility, display, and languages</span>
            <i class="material-icons">&#xe315;</i>
          </button>
          <button
            onClick={() => setCurrentSection('resource')}
            type="button" className={currentSection === 'resource' ? 'current-section' : ''}
          >
            <span>Additional resources</span>
            <i class="material-icons">&#xe315;</i>
          </button>
        </div>
      </div>
      {currentSection === 'account' && <AccountSection />}
      {currentSection === 'security' && <SecuritySection />}
      {currentSection === 'notification' && <NotificationSection />}
      {currentSection === 'accessibility' && <AccessiblitySection />}
      {currentSection === 'privacy' && <PrivacySection />}
      {currentSection === 'resource' && <ResourceSection />}
    </div>
  )
}

export default SettingsPage
