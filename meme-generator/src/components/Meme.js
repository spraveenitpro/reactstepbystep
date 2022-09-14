import React, { useState, useEffect } from 'react'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <main className="meme">
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top Text"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    onChange={handleChange}
                    name="bottomText"
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme Image!!! !!!!
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
