import {
  TrendingPane, HomePage, LeftNav, ProfilePage, ExplorePage, NotificationPage
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
        </Switch>
        <TrendingPane />
      </div>
    </BrowserRouter>
  )
}

export default App
