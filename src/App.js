import { TrendingPane, HomePage, LeftNav } from './components'
import './index.css'

function App() {
  return (
    <div className="app-layer">
      <div id="overlay"></div>
      <LeftNav />
      <HomePage />
      <TrendingPane />
    </div>
  )
}

export default App
