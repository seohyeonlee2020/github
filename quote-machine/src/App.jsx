import { useState } from 'react'
import './App.css'
import Quotebox from './components/Quotebox'
import QuoteForm from './components/QuoteForm'

function App() {
  const [quote, setQuote] = useState(0)

  return (
    <>
	  <h1>Quote Machine</h1>
	  <Quotebox />
	  <h1>Add Quote</h1>
	  <QuoteForm />
    </>
  )
}

export default App
