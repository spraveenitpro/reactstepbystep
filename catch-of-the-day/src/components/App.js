import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
function App() {
    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Praveen is cool" />
            </div>
            <Inventory />
            <Order />
        </div>
    )
}

export default App
