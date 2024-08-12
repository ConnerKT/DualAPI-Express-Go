import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to my manga frontend!</h1>
     <p>What is this?</p>
     <p>This is an application to view manga (Like MAL) </p>
    </>
  )
}

export default App
