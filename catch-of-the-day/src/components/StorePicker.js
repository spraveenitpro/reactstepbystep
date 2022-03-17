/**
 * <p>This function returns a form that allows the user to enter a store name and submit it to the
 * store-selector component.</p>
 * @returns A form with a submit button.
 */
import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { getFunName } from '../helpers'

function StorePicker() {
    const myInput = useRef()
    const history = useHistory()
    function gotoStore(event) {
        event.preventDefault()
        const storeName = myInput.current.value
        history.push(`/store/${storeName}`)
    }
    return (
        <form className="store-selector" onSubmit={gotoStore}>
            <h2>Please enter store name:</h2>

            <input
                type="text"
                required
                placeholder="Store Name"
                defaultValue={getFunName()}
                ref={myInput}
            />
            <button type="submit">Visit Store!</button>
        </form>
    )
}

export default StorePicker
