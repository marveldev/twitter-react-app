import { TrendingPane, HomePage, LeftNav, ProfilePage } from './components'
import './index.css'

function App() {
  return (
    <div className="app-layer">
      <div id="overlay"></div>
      <LeftNav />
      <ProfilePage />
      <TrendingPane />
    </div>
  )
}

export default App
