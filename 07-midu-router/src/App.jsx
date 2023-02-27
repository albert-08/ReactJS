import './App.css'
import AboutPage from './pages/About'
import HomePage from './pages/Home'

import { Router } from './Router'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

function App() { 
  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  )
}

export default App