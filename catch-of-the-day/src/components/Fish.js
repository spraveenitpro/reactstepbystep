import React from 'react'
import { formatPrice } from '../helpers'

function Fish({ details, addToOrder, index }) {
    const { image, name, desc, price, status } = details
    const isAvailable = status === 'available'

    function handleClick() {
        addToOrder(index)
    }
    return (
        <>
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={handleClick}>
                    {isAvailable ? 'Add to Order' : 'Sold Out'}
                </button>
            </li>
        </>
    )
}

export default Fish
