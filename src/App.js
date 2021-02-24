import {
  TrendingPane, HomePage, LeftNav, ProfilePage, ExplorePage, NotificationPage, BookmarkPage, ListsPage
} from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layer">
        <div id="overlay"></div>
        <LeftNav />
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/explore" component={ExplorePage}/>
          <Route path="/notification" component={NotificationPage}/>
          <Route path="/bookmark" component={BookmarkPage}/>
          <Route path="/list" component={ListsPage}/>
        </Switch>
        <TrendingPane />
      </div>
    </BrowserRouter>
  )
}

export default App
