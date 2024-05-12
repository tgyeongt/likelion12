import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0) // useState()가 훅이다
  // let number = 0;

  // function add() {
  //   setCount(count + 1);
  //   console.log(number);
  // }

  return (
    <>
      <Profile 
        name = "박태경"
        introduction = "안녕하세요. 박태경입니다."
        viewCount = {1500}
      />
    </>
    );
}

export default App
