import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = id => {
        console.log(id)
        if (window.confirm('are you sure bro!')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    )
}

export default App
