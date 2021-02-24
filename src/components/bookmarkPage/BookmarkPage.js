import './bookmarkPage.css'

const BookmarkPage = () => {
  return (
    <div className="bookmarks-page">
      <div className="header">
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
