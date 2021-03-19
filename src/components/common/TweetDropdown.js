const TweetDropdown = (
  {
    tweetDropdown, setTweetDropdown,setDeleteModalIsVisible, setEditTweetModal
  }
) => {
  return (
    <>
      <div className="overlay" style={{backgroundColor: "transparent"}}
        onClick={() => setTweetDropdown(false)}
      >
      </div>
      <div className="tweet-dropdown" style={{top: tweetDropdown.position}}>
        <button
          onClick={() => {
            setDeleteModalIsVisible(true)
            setTweetDropdown({...tweetDropdown, isActive:false})
          }}
        >
          <i className="fa fa-trash-o"></i>
          Delete
        </button>
        <button onClick={() =>
          {
            setEditTweetModal(true)
            setTweetDropdown({...tweetDropdown, isActive:false})
          }}
        >
          <i className="fa fa-edit"></i>
          Edit Tweet
        </button>
        <button><i className="fa fa-code"></i>Embed Tweet</button>
        <button><i className="material-icons">&#xe1b8;</i>View Tweet activity</button>
      </div>
    </>
  )
}

export default TweetDropdown
