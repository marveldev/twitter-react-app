const DeleteModal = ({
    setDeleteModalIsVisible, tweetData, setTweetData, selectedTweet
}) => {
  const deleteTweet = () => {
    const nextState = tweetData.filter((tweetItem) => {
      return tweetItem.id !== selectedTweet.id
    })

    setTweetData(nextState)
    setDeleteModalIsVisible(false)
  }

  return (
    <>
      <div onClick={() => setDeleteModalIsVisible(false)} className="overlay"></div>
      <div className="delete-modal">
        <h3>Delete Tweet?</h3>
        <p>This can't be undone and it will be removed from your timeline.</p>
        <button onClick={() => setDeleteModalIsVisible(false)} className="cancel-button">Cancel</button>
        <button onClick={() => deleteTweet()} className="confirm-button">Delete</button>
      </div>
    </>
  )
}

export default DeleteModal
