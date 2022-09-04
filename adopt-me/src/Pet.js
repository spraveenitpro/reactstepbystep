import React from 'react'

/**
 * The Pet component takes in props and returns a div with the name, animal, and breed of the pet.
 * @param props - an object that contains all of the information passed to the Pet component
 * @returns A React component
 */
const Pet = ({ name, animal, breed }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{animal}</h2>
            <h2>{breed}</h2>
        </div>
    )
}

export default Pet
