import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = id => {
        console.log(id)
        if (window.confirm('are you sure bro!')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
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
