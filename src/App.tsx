import { useEffect, lazy, Suspense } from 'react'
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
  <div className="flex items-center justify-center min-h-screen bg-slate-900">
    <div className="w-[40px] h-[40px] rounded-full border-[3px] border-white/30 border-t-blue-500 animate-spin"></div>
  </div>
)

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
