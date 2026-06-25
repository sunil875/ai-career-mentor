import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

function App() {
  const [serverStatus, setServerStatus] = useState('checking')

  useEffect(() => {
    // Check if backend server is running
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setServerStatus('connected')
        }
      })
      .catch(err => {
        console.error('Backend not connected:', err)
        setServerStatus('disconnected')
      })
  }, [])

  return (
    <div className="app">
      <Navbar />
      {serverStatus === 'disconnected' && (
        <div className="server-warning">
          ⚠️ Warning: Backend server is not running. Make sure to start it with: npm start (in backend folder)
        </div>
      )}
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App
