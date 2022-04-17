import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        { id: 1, text: 'this 1 item from context', rating: 10 },
        { id: 2, text: 'this 2 item from context', rating: 7 },
        { id: 3, text: 'this 3 item from context', rating: 3 },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = id => {
        console.log(id)
        if (window.confirm('are you sure bro!')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const editFeedback = item => {
        setFeedbackEdit({
            item,
            edit: true,
        })

        console.log(item)
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
