import { useRef, useState } from 'react'

/**
 * This function returns a div with the className "inventory"
 * @returns A div with the text "Inventory!!"
 */
function AddFishForm({ addFish }) {
    const createFish = (event) => {
        event.preventDefault()
        const fish = {
            name: nameRef.current.value,
            price: parseFloat(priceRef.current.value),
            status: statusRef.current.value,
            desc: descRef.current.value,
            image: imageRef.current.value,
        }
        //console.log(fish)
        addFish(fish)
        event.currentTarget.reset()
    }
    const nameRef = useRef()
    const priceRef = useRef()
    const statusRef = useRef()
    const descRef = useRef()
    const imageRef = useRef()
    return (
        <>
            <form className="fish-edit" onSubmit={createFish}>
                <input
                    name="name"
                    ref={nameRef}
                    type="text"
                    placeholder="Name"
                />
                <input
                    name="price"
                    ref={priceRef}
                    type="text"
                    placeholder="Price"
                />
                <select name="status" ref={statusRef}>
                    <option value="available">Fresh!!</option>
                    <option value="unavailable">Sold Out!!</option>
                </select>
                <textarea name="desc" ref={descRef} placeholder="Desc" />
                <input
                    name="image"
                    ref={imageRef}
                    type="text"
                    placeholder="Image"
                />
                <button type="submit">+ Add Fish</button>
            </form>
        </>
    )
}

export default AddFishForm
