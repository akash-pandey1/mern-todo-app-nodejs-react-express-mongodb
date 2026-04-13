import { useState } from 'react'
import './App.css'
import Home from './pages/Home' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Home/>
      </div>
    </div>
  )
}

export default App
