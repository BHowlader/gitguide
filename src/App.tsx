import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuickStartPage from './pages/QuickStartPage'
import BasicsPage from './pages/BasicsPage'
import CommandsPage from './pages/CommandsPage'
import BranchingPage from './pages/BranchingPage'
import GitHubPage from './pages/GitHubPage'
import CheatSheetPage from './pages/CheatSheetPage'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 flex flex-col">
          <Navigation darkMode={darkMode} toggleTheme={toggleTheme} />
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
