import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './Style/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        Tailwind activado 🔥
      </h1>

      <p className="mb-4">Has hecho clic {count} veces</p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
      >
        Sumar
      </button>
    </div>
  )
}

export default App
