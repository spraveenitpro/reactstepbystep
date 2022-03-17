import React from 'react'
import AddFishForm from './AddFishForm'

/**
 * This function returns a div with the className "inventory"
 * @returns A div with the text "Inventory!!"
 */
function Inventory({ addFish }) {
    return (
        <>
            <div className="inventory">
                <h2>Inventory!!</h2>
                <AddFishForm addFish={addFish} />
            </div>
        </>
    )
}

export default Inventory
