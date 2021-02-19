import HomePage from "./components/homePage/HomePage"
import LeftNav from "./components/leftNav/LeftNav"
import TrendingPane from "./components/trendingPane/TrendingPane"
import './index.css'

function App() {
  return (
    <div className="app-layer">
      <LeftNav />
      <HomePage />
      <TrendingPane />
    </div>
  )
}

export default App
