import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'

const App = () => {
    const [img, setImg] = useState('')
    const [res, setRes] = useState([])
    const fetchRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${process.env.REACT_APP_API_KEY}&per_page=10`
        )
        const dataJ = await data.json()
        const result = dataJ.results
        console.log(dataJ)
        setRes(result)
    }

    useEffect(() => {
        fetchRequest()
    }, [])

    const Submit = () => {
        fetchRequest()
        setImg('')
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center input">
                        <input
                            type="text"
                            placeholder="Search Anything..."
                            className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
                            value={img}
                            onChange={(event) => setImg(event.target.value)}
                        />

                        <Button
                            variant="outline-dark  text-black fs-3 mx-3"
                            onClick={Submit}
                            type="submit"
                        >
                            Search
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-evenly flex-wrap">
                        {res.map((val) => {
                            return (
                                <>
                                    <Card key={val.id} className="col-3">
                                        <Card.Img
                                            variant="top"
                                            className="col-3 img-fluid img-thumbnail"
                                            src={val.urls.small}
                                            style={{
                                                width: '100%',
                                                height: '230px',
                                            }}
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                {val.alt_description}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
