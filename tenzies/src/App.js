import Die from './components/Die'
import './App.css'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        //console.log('Dice State Changed!!')
        const allHeld = dice.every((die) => die.isHeld === true)
        const firstValue = dice[0].value
        const allSame = dice.every((die) => die.value === firstValue)

        if (allHeld && allSame) {
            setTenzies(true)
        }
    }, [dice])

    function holdDice(id) {
        //console.log(id)
        setDice((oldDice) =>
            oldDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die
            })
        )
    }

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        }
    }
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        //console.log(newDice)
        return newDice
    }

    function rollDice() {
        if (!tenzies) {
            setDice((oldDice) =>
                oldDice.map((die) => {
                    return die.isHeld ? die : generateNewDie()
                })
            )
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }
    const diceElements = dice.map((die) => (
        <Die
            value={die.value}
            key={die.id}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))

    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same, Click each die to freeze it at
                its current value between rolls
            </p>
            <div className="dice-container">{diceElements}</div>
            <button onClick={rollDice} className="roll-dice">
                {tenzies ? 'New Game' : 'Roll'}
            </button>
        </main>
    )
}

export default App
