import { useState } from 'react'
import './App.css'
import Quotebox from './components/Quotebox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	  <h1>Quote Machine</h1>
	  <Quotebox />
    </>
  )
}

export default App
