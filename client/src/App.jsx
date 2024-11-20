import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import AddItem from './components/AddItem.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <div className='flex justify-around flex-row'> */}
        <Sidebar />
        <div className='ml-80 py-4'>
          <AddItem />
        </div>
      {/* </div> */}
    </>
  )
}

export default App
