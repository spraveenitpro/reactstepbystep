import React from 'react'

function StorePicker() {
    return (
        <>
            <form className="store-selector">
                <h2>Please enter store name:</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store!</button>
            </form>
        </>
    )
}

export default StorePicker
