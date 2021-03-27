import { displaySettingsPage } from '../common/helper'

const ResourceSection = () => {
  return (
    <div className="resource-section">
      <div className="section header">
        <button type="button" onClick={displaySettingsPage} className="previous-button">
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <span>Additional resources</span>
      </div>
      <div className="section-content">
        <div>
          <span>Check out other places for helpful information
            to learn more about Twitter products and services.
          </span>
        </div>
        <div>
          <h3>Release notes</h3>
        </div>
        <section className="more-options">
          <button type="button" className="button">
            <p>Release notes</p>
            <i className="material-icons">&#xe315;</i>
          </button>
        </section>
        <section className="more-options">
          <div>
            <h3>Legal</h3>
          </div>
          <button type="button" className="button">
            <p>Ads info</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Cookie policy</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Privacy policy</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Terms of Service</p>
            <i className="material-icons">&#xe315;</i>
          </button>
        </section>
        <section className="more-options">
          <div>
            <h3>Miscellaneous</h3>
          </div>
          <button type="button" className="button">
            <p>About</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Advertising</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Blog</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Brand Resources</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Careers</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Developers</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Help Center</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Marketing</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Status</p>
            <i className="material-icons">&#xe315;</i>
          </button>
          <button type="button" className="button">
            <p>Twitter for Business</p>
            <i className="material-icons">&#xe315;</i>
          </button>
        </section>
      </div>
    </div>
  )
}

export default ResourceSection
