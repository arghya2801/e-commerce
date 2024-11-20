import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import AddItem from './components/AddItem.jsx'
import Item from './components/Item.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='ml-80 py-4'>
        <AddItem />
        <div className='grid grid-cols-3 gap-4'>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  )
}

export default App
