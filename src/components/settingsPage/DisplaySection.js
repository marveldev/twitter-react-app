const DisplaySection = ({ setTheme }) => {
  const changeTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('storedTheme', theme)
  }

  return (
    <div>
      <div className="section header">
        <button type="button" className="previous-button">
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <span>Display</span>
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
          <div className="color-options">
            <div id="blueColor">
              <button className="circle">✔</button>
              <i className="fa fa-heart"></i>
            </div>
            <div id="tangerineColor">
              <button className="circle">✔</button>
              <i className="fa fa-star"></i>
            </div>
            <div id="ceriseColor">
              <button className="circle">✔</button>
              <i className="material-icons">&#x1F338;</i>
            </div>
            <div id="purpleColor">
              <button className="circle">✔</button>
              <i className="material-icons">&#x1F47E;</i>
            </div>
            <div id="orangeColor">
              <button className="circle">✔</button>
              <i className="material-icons">&#x1F525;</i>
            </div>
            <div id="greenColor">
              <button className="circle">✔</button>
              <i className="material-icons">&#x1F951;</i>
            </div>
          </div>
        </section>
        <section className="more-options">
          <div>
            <h3>Background</h3>
          </div>
          <div className="theme-options">
            <div id="defaultTheme" onClick={() => changeTheme('default')}>
              <label className="container">
                <input type="radio" name="radio"/>
                <span className="checkmark"></span>
              </label>
              <p>Default</p>
            </div>
            <div id="dimTheme" onClick={() => changeTheme('dim')}>
              <label className="container">
              <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
              <p>Dim</p>
            </div>
            <div id="lightsOutTheme" onClick={() => changeTheme('lightsOut')}>
              <label className="container">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
              <p>Lights out</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DisplaySection
