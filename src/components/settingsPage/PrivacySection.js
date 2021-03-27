import { displaySettingsPage } from '../common/helper'

const PrivacySection = () => {
  return (
    <div className="privacy-section">
      <div className="section header">
        <button type="button" onClick={displaySettingsPage} className="previous-button">
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <span>Privacy and safety</span>
      </div>
      <div className="section-content">
        <div>
          <span>Manage what information you see and share on Twitter.</span>
        </div>
        <div>
          <h3>Your Twitter activity</h3>
        </div>
        <section>
          <button type="button" className="button">
            <p className="fa fa-users"></p>
            <div>
              <p>Audience and tagging</p>
              <span>Manage what information you allow other people on Twitter to see.</span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p className="material-icons">&#xe3c9;</p>
            <div>
              <p>Your Tweets</p>
              <span>Manage the information associated with your Tweets. </span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p className="fa fa-wpforms"></p>
            <div>
              <p>Content you see</p>
              <span>Decide what you see on Twitter based on
                your preferences like Topics and interests
              </span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p className="material-icons">&#xe04f;</p>
            <div>
              <p>Mute and block</p>
              <span>Manage the accounts, words, and notifications that you've muted or blocked</span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p className="material-icons">&#xe0e1;</p>
            <div>
              <p>Direct Messages</p>
              <span>Manage who can message you directly.</span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p className="material-icons">&#xe8b6;</p>
            <div>
              <p>Discoverability and contacts</p>
              <span>Control your discoverability settings and manage contacts you've imported.</span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
        </section>
        <div>
          <h3>Data sharing and off-Twitter activity</h3>
        </div>
        <section>
          <button type="button" className="button">
            <p className="material-icons">&#xe0df;</p>
            <div>
              <p>Ads preferences</p>
              <span>Manage your ads experience on Twitter</span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p className="material-icons">&#xe6e1;</p>
            <div>
              <p>Off-Twitter activity</p>
              <span>Manage how Twitter uses your online activity outside of Twitter,
                such as the websites you visit, to personalize your experienece.
              </span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p className="material-icons">&#xe8d4;</p>
            <div>
              <p>Data sharing with business partners</p>
              <span>Allow sharing of additional information
                with Twitter's business partners.
              </span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
              <p className="material-icons">&#xe0c8;</p>
            <div>
              <p>Location information</p>
              <span>Manage the location information Twitter
                uses to personalize your experience.
              </span>
            </div>
            <i className="material-icons">&#xe315;</i>
          </button>
        </section>
        <div>
          <h3>Learn more about privacy on Twitter</h3>
        </div>
        <section className="more-options">
          <button type="button" className="button">
            <p>Privacy center</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Privacy policy</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Contact us</p>
            <i className="material-icons">&#xe315;</i>
          </button>
        </section>
      </div>
    </div>
  )
}

export default PrivacySection
