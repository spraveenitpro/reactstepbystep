/**
 * <p>This function returns a form that allows the user to enter a store name and submit it to the
 * store-selector component.</p>
 * @returns A form with a submit button.
 */
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
