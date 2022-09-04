import { useState } from 'react'

import Die from './assets/components/Die'


function App() {
  

  return (
    <div className="App">
      <div className="main-container">
        <div className="text-container">
        <h1 className="title">Tenzi</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at it's current value between rolls.</p>
        </div>
        <div className="die-container">
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
        </div>
        <div className="button-container">

          <button>button</button>
        </div>
      </div>
    </div>
  )
}

export default App
