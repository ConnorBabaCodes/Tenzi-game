import { useState } from 'react'

import Die from './assets/components/Die'


function App() {
  
const [dieState, setDieState] = useState(allNumbers())

function allNumbers() {
  let numberArray = []
  for(let i = 1; i < 11; i++) {
    const numberObject = {isHeld: false, id: i}
    numberObject.value = Math.floor(Math.random() * 7)
    numberArray.push(numberObject)
    console.log(numberObject)
  }
  return numberArray
}

function reRoll() {
  setDieState(allNumbers())
}

function holdDice(id) {
  setDieState(prevState => prevState.map(die => {
    return die.id === id ?
    {...die, isHeld: !die.isHeld} :
    die
  }))
}


const diceArray = dieState.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

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

          <button className="roll" onClick={reRoll}>Roll</button>
        </div>
      </div>
    </div>
  )
}

export default App
