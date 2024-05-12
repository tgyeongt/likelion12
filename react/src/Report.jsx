import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile';

function Report(Props) {
 
  return (
    <>
      <Profile 
        name = "박태경"
        introduction = "안녕하세요. 박태경입니다."
        viewCount = {1500}
      />

      <Profile 
        name = "한가한"
        introduction = "안녕하세요. 한가한입니다."
        viewCount = {2000}
      />

      <Profile 
        name = "남궁민수"
        introduction = "안녕하세요. 남궁민수입니다."
        viewCount = {3000}
      />
    </>
    );
}

export default Report