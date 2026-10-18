import { useState, useEffect } from 'react'

export default function App() {
  const [ram, setRam] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/get-ram.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setRam(data.ram_mb))
      .catch((err) => console.error('Error fetching RAM endpoint:', err))
  }, [])

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>TanStack Start on GitHub Pages</h1>
      <p>Fetched configuration response:</p>
      <div style={{ background: '#f3f4f6', padding: '1rem', borderRadius: '8px', display: 'inline-block' }}>
        <strong>RAM:</strong> {ram ? `${ram} MB` : 'Loading...'}
      </div>
    </main>
  )
}
