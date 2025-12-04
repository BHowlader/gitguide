import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'))
const QuickStartPage = lazy(() => import('./pages/QuickStartPage'))
const BasicsPage = lazy(() => import('./pages/BasicsPage'))
const CommandsPage = lazy(() => import('./pages/CommandsPage'))
const BranchingPage = lazy(() => import('./pages/BranchingPage'))
const GitHubPage = lazy(() => import('./pages/GitHubPage'))
const CheatSheetPage = lazy(() => import('./pages/CheatSheetPage'))

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

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
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quick-start" element={<QuickStartPage />} />
                <Route path="/basics" element={<BasicsPage />} />
                <Route path="/commands" element={<CommandsPage />} />
                <Route path="/branching" element={<BranchingPage />} />
                <Route path="/github" element={<GitHubPage />} />
                <Route path="/cheatsheet" element={<CheatSheetPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
