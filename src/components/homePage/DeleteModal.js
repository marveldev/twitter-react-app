const DeleteModal = ({ deleteModal, setDeleteModal, tweetData, setTweetData }) => {
  const deleteTweet = (tweetId) => {
    setTweetData(
      tweetData.filter((tweetItem) => {
        return tweetItem.id !== tweetId
      })
    )
    setDeleteModal(false)
  }
  return (
    <>
      <div onClick={() => setDeleteModal(false)} className="overlay"></div>
      <div className="delete-modal">
        <h3>Delete Tweet?</h3>
        <p>This can't be undone and it will be removed from your timeline.</p>
        <button onClick={() => setDeleteModal(false)} className="cancel-button">Cancel</button>
        <button onClick={() => deleteTweet(deleteModal.tweetId)} className="confirm-button">Delete</button>
      </div>
    </>
  )
}

export default DeleteModal
