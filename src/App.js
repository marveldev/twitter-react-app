import {
  TrendingPane, HomePage, LeftNav, ProfilePage, ExplorePage,
  NotificationPage, BookmarkPage, ListsPage, MessagePage, CommentPage, SettingsPage
} from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import { useState } from 'react'

const App = () => {
  const storedTheme = localStorage.getItem('storedTheme')
  const [theme, setTheme] = useState(storedTheme || '')
  const [tweetData, setTweetData] = useState([])
  const [editTweetModal, setEditTweetModal] = useState(false)
  const [tweetDropdown, setTweetDropdown] = useState({isActive: false, position:''})
  const [deleteModal, setDeleteModal] = useState({isActive: false, tweetId:''})
  const [commentModal, setCommentModal] = useState(false)

  return (
    <BrowserRouter>
      <div className={`app-layer ${theme}`}>
        <LeftNav
          theme={theme}
          setTheme={setTheme}
          tweetData={tweetData}
          setTweetData={setTweetData}
        />
        <Switch>
          <Route path="/"
            component={() => (
              <HomePage
                tweetData={tweetData}
                setTweetData={setTweetData}
                commentModal={commentModal}
                setCommentModal={setCommentModal}
                tweetDropdown={tweetDropdown}
                setTweetDropdown={setTweetDropdown}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                editTweetModal={editTweetModal}
                setEditTweetModal={setEditTweetModal}
              />
            )} exact
          />
          <Route path="/comment" component={CommentPage}/>
          <Route path="/profile"
            component={() => (
              <ProfilePage
                tweetData={tweetData}
                setTweetData={setTweetData}
                commentModal={commentModal}
                setCommentModal={setCommentModal}
                tweetDropdown={tweetDropdown}
                setTweetDropdown={setTweetDropdown}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                editTweetModal={editTweetModal}
                setEditTweetModal={setEditTweetModal}
              />
            )}
          />
          <Route path="/explore" component={ExplorePage}/>
          <Route path="/notification" component={NotificationPage}/>
          <Route path="/bookmark" component={BookmarkPage}/>
          <Route path="/list" component={ListsPage}/>
        </Switch>
        <Switch>
          <Route path="/messages" component={MessagePage}/>
          <Route
            path="/settings"
            component={() => (
              <SettingsPage
                theme={theme}
                setTheme={setTheme}
              />
            )}
          />
          <TrendingPane />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
