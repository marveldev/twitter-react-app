import {
  TrendingPane, HomePage, LeftNav, ProfilePage, ExplorePage,
  NotificationPage, BookmarkPage, ListsPage, MessagePage, CommentPage, SettingsPage
} from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import { useState } from 'react'

const App = () => {
  const themeObject = JSON.parse(localStorage.getItem('theme'))
  const [theme, setTheme] = useState(themeObject.theme || '')
  document.body.style.backgroundColor = themeObject.backgroundColor
  return (
    <BrowserRouter>
      <div className={`app-layer ${theme}`}>
        <LeftNav />
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/comment" component={CommentPage}/>
          <Route path="/profile" component={ProfilePage}/>
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
