import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Import pages directly for instant navigation
import Home from './pages/Home'
import QuickStartPage from './pages/QuickStartPage'
import BasicsPage from './pages/BasicsPage'
import CommandsPage from './pages/CommandsPage'
import BranchingPage from './pages/BranchingPage'
import GitHubPage from './pages/GitHubPage'
import CheatSheetPage from './pages/CheatSheetPage'

function App() {
  // Set dark mode permanently
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <Router>
      <div className="dark">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-colors duration-300 flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quick-start" element={<QuickStartPage />} />
              <Route path="/basics" element={<BasicsPage />} />
              <Route path="/commands" element={<CommandsPage />} />
              <Route path="/branching" element={<BranchingPage />} />
              <Route path="/github" element={<GitHubPage />} />
              <Route path="/cheatsheet" element={<CheatSheetPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}


export default App
