import { useState } from 'react'
import './App.css'
import Card from './card/Card'
import Flower1 from './flower1/Flower1'

function App() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <>
      {
      isLocked?
        <Flower1 setIsLocked={setIsLocked}/>
        :
        <Card/>
      }
    </>
  )
}

export default App
