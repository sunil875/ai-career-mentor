import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [health, setHealth] = useState({ checking: true, ok: false });

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((r) => r.json())
      .then((data) => {
        if (data && data.success) setHealth({ checking: false, ok: true });
        else setHealth({ checking: false, ok: false });
      })
      .catch(() => setHealth({ checking: false, ok: false }));
  }, []);

  return (
    <main className="dashboard">
      <h1>AI Career Mentor</h1>

      <section className="status">
        {health.checking ? (
          <p>Checking backend...</p>
        ) : health.ok ? (
          <p style={{ color: 'green' }}>Backend connected ✓</p>
        ) : (
          <p style={{ color: 'crimson' }}>Backend disconnected ✕</p>
        )}
      </section>

      <section className="placeholder">
        <h2>Welcome</h2>
        <p>This is the Dashboard placeholder. Replace with real components as needed.</p>
      </section>
    </main>
  );
}
