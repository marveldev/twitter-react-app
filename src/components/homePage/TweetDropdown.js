const TweetDropdown = ({ tweetDropdown, setTweetDropdown, deleteModal, setDeleteModal }) => {
  return (
    <>
      <div className="overlay" style={{backgroundColor: "transparent"}}
        onClick={() => setTweetDropdown(false)}
      >
      </div>
      <div className="tweet-dropdown" style={{top: tweetDropdown.position}}>
        <button
          onClick={() => {
            setDeleteModal({isActive: true, tweetId: deleteModal.tweetId});
            setTweetDropdown(false)
          }}
        >
          <i className="fa fa-trash-o"></i>
          Delete
        </button>
        <button><i className="material-icons">&#xe55e;</i>Pin to your profile</button>
        <button><i className="fa fa-code"></i>Embed Tweet</button>
        <button><i className="material-icons">&#xe1b8;</i>View Tweet activity</button>
      </div>
    </>
  )
}

export default TweetDropdown
