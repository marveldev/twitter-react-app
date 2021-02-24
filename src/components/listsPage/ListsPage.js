import './listsPage.css'

const ListsPage = () => {
  return (
    <div className="lists-page">
      <div className="header">
        <button type="button"><i className="material-icons">&#xe5c4;</i></button>
        <div>
          <span>Lists</span>
          <small>@Marvel1167481</small>
        </div>
      </div>
      <div className="lists-page-content">
        <div className="list">
          <h4>Pinned Lists</h4>
          <p>Nothing to see here yet - pin your favorite Lists to access them quickly</p>
        </div>
        <div>
          <h4>Discover new Lists</h4>
          <div className="new-list-item">
            <img src="https://pbs.twimg.com/media/EXZ2mJCUEAEbJb3?format=png&name=small" alt="photo"/>
            <div>
              <p>Celebrities</p>
              <p><strong>kingbookah</strong>_@kingbookah</p>
            </div>
            <button type="button">Follow</button>
          </div>
          <div className="new-list-item">
            <img src="https://pbs.twimg.com/media/EXZ2mJCUEAEbJb3?format=png&name=small" alt="photo"/>
            <div>
              <p>LEMTOL ORGANIC ANTISEPTIC</p>
              <p><strong>LEMTOL ORGANIC ANTISEPTIC </strong>@ lemtola</p>
            </div>
            <button type="button">Follow</button>
          </div>
        </div>
        <div className="list">
          <h4>Your Lists</h4>
          <p>You haven't created or followed any Lists. When you do, they'll show up here.</p>
        </div>
      </div>
    </div>
  )
}

export default ListsPage
