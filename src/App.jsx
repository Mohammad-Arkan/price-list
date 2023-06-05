import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/Navber/Navber'
import PriceList from './components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navber></Navber>
        <h1 className='text-8xl text-red-500'>Hello from tailwind</h1> 
        <PriceList></PriceList>
    </>
  )
}

export default App
