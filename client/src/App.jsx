import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      Hello
      <Sidebar />
    </>
  )
}

export default App
