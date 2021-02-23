import { TrendingPane, HomePage, LeftNav, ProfilePage } from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layer">
        <div id="overlay"></div>
        <LeftNav />
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/profile" component={ProfilePage}/>
        </Switch>
        <TrendingPane />
      </div>
    </BrowserRouter>
  )
}

export default App
