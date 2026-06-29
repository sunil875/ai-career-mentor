import { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! 👋 I\'m your AI Career Mentor. Ask me anything about careers, learning paths, or skills!',
      sender: 'bot'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      const data = await response.json()

      if (data.success) {
        const botMessage = {
          id: userMessage.id + 1,
          text: data.reply,
          sender: 'bot'
        }
        setMessages(prev => [...prev, botMessage])
      } else {
        const errorMessage = {
          id: userMessage.id + 1,
          text: 'Sorry, I couldn\'t process that. Try asking about a career or skill!',
          sender: 'bot'
        }
        setMessages(prev => [...prev, errorMessage])
      }
    } catch (error) {
      console.error('Chatbot error:', error)
      const errorMessage = {
        id: userMessage.id + 1,
        text: '⚠️ Connection error. Make sure the backend server is running!',
        sender: 'bot'
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>💬 Ask Me Anything</h3>
        <p>Questions about careers? I'm here to help!</p>
      </div>

      <div className="messages-container">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <div className="message-content">
              <span className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about AI Engineer, Data Science, careers..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? '...' : '→'}
        </button>
      </form>
    </div>
  )
}

export default Chatbot
