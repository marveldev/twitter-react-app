import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import database from './dataBase'
import {
  TrendingPane, HomePage, LeftNav, ProfilePage, ExplorePage,
  NotificationPage, BookmarkPage, ListsPage, MessagePage, CommentPage, SettingsPage
} from './components'
import './index.css'

const App = () => {
  const profilePhotoUrl = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  const storedTheme = localStorage.getItem('storedTheme')
  const storedTextColor = localStorage.getItem('storedTextColor')
  const [theme, setTheme] = useState(storedTheme || 'default')
  const [textColor, setTextColor] = useState(storedTextColor || 'blue')
  const [activePage, setActivePage] = useState('')
  const [tweetData, setTweetData] = useState([])
  const [editTweetModal, setEditTweetModal] = useState(false)
  const [tweetDropdown, setTweetDropdown] = useState({isActive: false})
  const [deleteModalIsVisible, setDeleteModalIsVisible] = useState(false)
  const [commentModal, setCommentModal] = useState(false)
  const [selectedTweet, setSelectedTweet] = useState({})
  const [messageData, setMessageData] = useState([])
  const [commentData, setCommentData] = useState([])
  const [selectedContact, setSelectedContact] = useState()

  const [bio, setBio] = useState({
    name: 'Jane Doe',
    aboutUser: 'Front-end developer',
    location: 'Lagos, Nigeria',
    website: '',
    birthDate: 'Born April 5, 1906',
    profilePhoto: profilePhotoUrl,
    headerPhoto: profilePhotoUrl
  })

  const bioData = useLiveQuery(() => database.bio.toArray(), [])
  if (!bioData) return null
  console.log(bioData);

  return (
    <BrowserRouter>
      <div className={`app-layer ${theme} ${textColor}`}>
        <LeftNav
          theme={theme}
          setTheme={setTheme}
          textColor={textColor}
          setTextColor={setTextColor}
          tweetData={tweetData}
          setTweetData={setTweetData}
          setActivePage={setActivePage}
          activePage={activePage}
          bioData={bioData}
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
                deleteModalIsVisible={deleteModalIsVisible}
                setDeleteModalIsVisible={setDeleteModalIsVisible}
                editTweetModal={editTweetModal}
                setEditTweetModal={setEditTweetModal}
                selectedTweet={selectedTweet}
                setSelectedTweet={setSelectedTweet}
                bioData={bioData}
                commentData={commentData}
                setCommentData={setCommentData}
              />
            )} exact
          />
          <Route path="/comment"
            component={() => (
              <CommentPage
                bioData={bioData}
                selectedTweet={selectedTweet}
                commentData={commentData}
                setCommentData={setCommentData}
              />
            )}
          />
          <Route path="/profile"
            component={() => (
              <ProfilePage
                tweetData={tweetData}
                setTweetData={setTweetData}
                commentModal={commentModal}
                setCommentModal={setCommentModal}
                tweetDropdown={tweetDropdown}
                setTweetDropdown={setTweetDropdown}
                deleteModalIsVisible={deleteModalIsVisible}
                setDeleteModalIsVisible={setDeleteModalIsVisible}
                editTweetModal={editTweetModal}
                setEditTweetModal={setEditTweetModal}
                selectedTweet={selectedTweet}
                setSelectedTweet={setSelectedTweet}
                bioData={bioData}
                commentData={commentData}
                setCommentData={setCommentData}
              />
            )}
          />
          <Route path="/explore" component={ExplorePage}/>
          <Route path="/notification" component={NotificationPage}/>
          <Route path="/bookmark" component={BookmarkPage}/>
          <Route path="/list" component={ListsPage}/>
        </Switch>
        <Switch>
          <Route
            path="/messages"
            component={() => (
              <MessagePage
                messageData={messageData}
                setMessageData={setMessageData}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
              />
            )}
          />
          <Route
            path="/settings"
            component={() => (
              <SettingsPage
                theme={theme}
                setTheme={setTheme}
                textColor={textColor}
                setTextColor={setTextColor}
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
