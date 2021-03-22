import "./notificationPage.css"

const NotificationPage = () => {
  return (
    <div className="notification-page">
      <div id="header">
        <div>
          <span>Notifications</span>
          <button type="button"><i className="material-icons">&#xe8b8;</i></button>
        </div>
        <div id="pageNavButtons">
          <button type="button" className="current">All</button>
          <button type="button">Mentions</button>
        </div>
      </div>
      <div className="notification-page-content">
        <div>
          <i className="fa fa-bell symbol"></i>
          <div>
            <img src="https://images.pexels.com/photos/1725399/pexels-photo-1725399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-profile"/>
            <p>New Tweet notifications for <strong>Ebenezer Don</strong></p>
          </div>
        </div>
        <div>
          <i className="fa fa-user-o symbol"></i>
          <div>
            <img src="https://images.pexels.com/photos/6924280/pexels-photo-6924280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-profile"/>
            <p><strong>Alo Kayode</strong> followed you</p>
          </div>
        </div>
        <div>
          <i className="fa fa-heart heart-icon"></i>
          <div>
            <img src="https://images.pexels.com/photos/1725399/pexels-photo-1725399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-profile"/>
            <p><strong>Ebenezer Don</strong> liked your Tweet</p>
            <p>Ten ways to know a junior developer</p>
          </div>
        </div>
        <div>
          <i className="fa fa-star"></i>
          <div>
            <img src="https://images.pexels.com/photos/6338278/pexels-photo-6338278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-profile"/>
            <p>Recommended For You</p>
            <p>I'm fired</p>
          </div>
        </div>
        <div>
          <i className="fa fa-heart heart-icon"></i>
          <div>
            <img src="https://images.pexels.com/photos/1983917/pexels-photo-1983917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-profile"/>
            <p><strong>Marcella Dias</strong> liked tour Tweet</p>
            <p>hey</p>
          </div>
        </div>
        <div>
          <i className="fa fa-bell symbol"></i>
          <div>
            <img src="https://images.pexels.com/photos/1725399/pexels-photo-1725399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-profile"/>
            <p>New Tweet notifications for <strong>Ebenezer Don</strong></p>
          </div>
        </div>
        <div>
          <i className="fa fa-user-o symbol"></i>
          <div>
            <img src="https://images.pexels.com/photos/6924280/pexels-photo-6924280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-profile"/>
            <p><strong>Alo Kayode</strong> followed you</p>
          </div>
        </div>
        <div>
          <i className="fa fa-star"></i>
          <div>
            <img src="https://images.pexels.com/photos/6338278/pexels-photo-6338278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-profile"/>
            <p>Recommended For You</p>
            <p>I'm fired</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationPage
