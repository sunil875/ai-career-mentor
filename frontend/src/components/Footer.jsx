import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>
            &copy; {currentYear} AI Career Mentor for Students. Built with
            <span className="heart">❤️</span>
            for your future.
          </p>
          <p className="footer-subtitle">
            Made with React, Node.js, and Express
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
