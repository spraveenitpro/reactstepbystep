import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'

function App() {
    const [fishes, setFishes] = useState({})
    const [order, setOrder] = useState({})

    console.log(fishes)

    useEffect(() => {
        setFishes(sampleFishes)
    })

    function addFish(fish) {
        const oldFishes = fishes
        oldFishes[`fish${Date.now()}`] = fish
        setFishes(oldFishes)
        console.log(fishes)
    }

    function loadSampleFishes() {
        setFishes(sampleFishes)
    }

    function addToOrder(key) {
        const newOrder = order
        newOrder[key] = newOrder[key] + 1 || 1

        //console.log(order)
    }
    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market" />
                <ul className="fishes">
                    {Object.keys(fishes).map((key) => (
                        <Fish
                            key={key}
                            index={key}
                            details={fishes[key]}
                            addToOrder={addToOrder}
                        />
                    ))}
                </ul>
            </div>

            <Order fishes={fishes} order={order} />
            <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
        </div>
    )
}

export default App
