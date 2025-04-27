import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 relative">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex-1">
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
