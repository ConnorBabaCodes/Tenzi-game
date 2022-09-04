import { useState } from 'react'

import Die from './assets/components/Die'


function App() {
  
const [dieState, setDieState] = useState(allNumbers())

function allNumbers() {
  let numberArray = []
  for(let i = 0; i < 10; i++) {
    numberArray.push(Math.floor(Math.random() * 7))
  }
  return numberArray
}

const diceArray = dieState.map(die => <Die value={die} />)

  return (
    <div className="App">
      <div className="main-container">
        <div className="text-container">
        <h1 className="title">Tenzi</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at it's current value between rolls.</p>
        </div>
        <div className="die-container">
         {diceArray}
        </div>
        <div className="button-container">

          <button>button</button>
        </div>
      </div>
    </div>
  )
}

export default App
