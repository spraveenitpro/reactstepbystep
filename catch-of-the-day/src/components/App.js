import React, { useState } from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
function App() {
    const [fishes, setFishes] = useState({})

    const addFish = (fish) => {
        const oldFishes = fishes
        oldFishes[`fish${Date.now()}`] = fish
        setFishes(oldFishes)
        console.log(fishes)
      
    }
    return (
        <React.StrictMode>
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Praveen is cool" />
                </div>

                <Order />
                <Inventory addFish={addFish} />
            </div>
        </React.StrictMode>
    )
}

export default App
