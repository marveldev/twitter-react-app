import { changeTheme, changeTextColor } from '../common'

const DisplayModal = ({ setDisplayModal, theme, setTheme, textColor, setTextColor }) => {
  return (
    <>
      <div className="overlay" onClick={() => setDisplayModal(false)}></div>
      <div className="display-modal">
        <div className="header">
          <span>Customize your view</span>
        </div>
        <div className="section-content">
          <div>
            <span>Manage your font size, color and background.
              These settings affect all the Twitter accounts on this browser.
            </span>
          </div>
          <section className="twitter-info">
            <span className="logo"><i className="fa">&#xf099;</i></span>
            <div>
              <strong>Twitter</strong>
              <p>At the heart of Twitter are short messages called Tweets just
                like this one which can include photos, links, text, and hashtags!
              </p>
            </div>
          </section>
          <section className="more-options">
            <div>
              <h3>Font size</h3>
            </div>
            <div className="font-size-options">
              <p>Aa</p>
              <p>Aa</p>
            </div>
          </section>
          <section className="more-options">
            <div>
              <h3>Color</h3>
            </div>
            <section className="color-options">
              <div id="blueColor">
                <label className="container"
                  onClick={() => changeTextColor('blue', setTextColor)}
                >
                  <input type="radio" name="colorInput"
                    defaultChecked={textColor === 'blue' ? true : false}
                  />
                  <span className="checkmark"></span>
                </label>
                <i className="fa fa-heart"></i>
              </div>
              <div id="tangerineColor">
                <label className="container"
                  onClick={() => changeTextColor('tangerine', setTextColor)}
                >
                  <input type="radio" name="colorInput"
                    defaultChecked={textColor === 'tangerine' ? true : false}
                  />
                  <span className="checkmark"></span>
                </label>
                <i className="fa fa-star"></i>
              </div>
              <div id="ceriseColor">
                <label className="container"
                  onClick={() => changeTextColor('cerise', setTextColor)}
                >
                  <input type="radio" name="colorInput"
                    defaultChecked={textColor === 'cerise' ? true : false}
                  />
                  <span className="checkmark"></span>
                </label>
                <i className="material-icons">&#x1F338;</i>
              </div>
              <div id="purpleColor">
                <label className="container"
                  onClick={() => changeTextColor('purple', setTextColor)}
                >
                  <input type="radio" name="colorInput"
                    defaultChecked={textColor === 'purple' ? true : false}
                  />
                  <span className="checkmark"></span>
                </label>
                <i className="material-icons">&#x1F47E;</i>
              </div>
              <div id="orangeColor">
                <label className="container"
                  onClick={() => changeTextColor('orange', setTextColor)}
                >
                  <input type="radio" name="colorInput"
                    defaultChecked={textColor === 'orange' ? true : false}
                  />
                  <span className="checkmark"></span>
                </label>
                <i className="material-icons">&#x1F525;</i>
              </div>
              <div id="greenColor">
                <label className="container"
                  onClick={() => changeTextColor('green', setTextColor)}
                >
                  <input type="radio" name="colorInput"
                    defaultChecked={textColor === 'green' ? true : false}
                  />
                  <span className="checkmark"></span>
                </label>
                <i className="material-icons">&#x1F951;</i>
              </div>
            </section>
          </section>
          <section className="more-options">
            <div>
              <h3>Background</h3>
            </div>
            <div className="theme-options">
              <div>
                <label className="container" id="defaultTheme"
                  onClick={() => changeTheme('default', setTheme)}
                >
                  <input type="radio" name="theme"
                    defaultChecked={theme === 'default' ? true : false}
                  />
                  <span className="checkmark"></span>Default
                </label>
              </div>
              <div>
                <label className="container" id="dimTheme"
                  onClick={() => changeTheme('dim', setTheme)}
                >
                  <input type="radio" name="theme"
                    defaultChecked={theme === 'dim' ? true : false}
                  />
                  <span className="checkmark"></span>Dim
                </label>
              </div>
              <div>
                <label className="container" id="lightsOutTheme"
                  onClick={() => changeTheme('lights-out', setTheme)}
                >
                  <input type="radio" name="theme"
                    defaultChecked={theme === 'lights-out' ? true : false}
                  />
                  <span className="checkmark"></span>Lights-out
                </label>
              </div>
            </div>
          </section>
          <button
            onClick={() => setDisplayModal(false)}
            type="button" className="save-button"
          >
            Done
          </button>
        </div>
      </div>
    </>
  )
}

export default DisplayModal
