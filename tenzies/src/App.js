import Die from './components/Die'
import './App.css'
import { useState } from 'react'

function App() {
    const [dice, setDice] = useState(allNewDice())
    function allNewDice() {
        const newDice = []
        for (var i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        //console.log(newDice)
        return newDice
    }

    const diceElements = dice.map((die, index) => (
        <Die value={die} key={index} />
    ))
    return (
        <main>
            <div className="dice-container">{diceElements}</div>
        </main>
    )
}

export default App
