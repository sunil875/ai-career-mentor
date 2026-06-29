import { useState, useEffect } from 'react'
import Chatbot from '../components/Chatbot'
import './Dashboard.css'

function Dashboard() {
  const [mentorReady, setMentorReady] = useState(false)

  useEffect(() => {
    // Initialize mentor
    setMentorReady(true)
  }, [])

  return (
    <main className="dashboard">
      {mentorReady ? (
        <Chatbot />
      ) : (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>Loading mentor...</p>
        </div>
      )}
    </main>
  )
}

export default Dashboard
