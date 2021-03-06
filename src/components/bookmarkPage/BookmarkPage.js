import { useHistory } from 'react-router-dom'
import './bookmarkPage.css'

const BookmarkPage = () => {
  const { goBack } = useHistory()

  return (
    <div className="bookmarks-page">
      <div className="header">
        <button type="button"  onClick={() => goBack()} className="previous-button">
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <span>Bookmarks</span>
      </div>
      <div className="bookmarks-page-content">
        <p>You haven't added any Tweets to your Bookmarks yet</p>
        <span>When you do, they 'll show up here.</span>
      </div>
    </div>
  )
}

export default BookmarkPage
