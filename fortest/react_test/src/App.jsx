import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let number = 0

  function add() {
    setCount(count + 1);
    console.log(number);
  }

  return (
    <>
    <button onClick={add}>+</button>
    <p>안녕하세요</p>
    <p>{count}</p>
    </>
  )
}

export default App
