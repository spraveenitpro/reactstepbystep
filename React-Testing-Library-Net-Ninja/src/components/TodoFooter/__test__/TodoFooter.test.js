import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoFooter from '../TodoFooter'

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe('TodoFooter', () => {
    test('Should render correct amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />)
        const paragraphElement = screen.getByText(/5 tasks left/i)
        expect(paragraphElement).toBeInTheDocument()
    })

    test('Should render task wgeb number of task is one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const paragraphElement = screen.getByText(/1 task left/i)
        expect(paragraphElement).toBeInTheDocument()
    })

    test('Should be truthy', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const paragraphElement = screen.getByText(/1 task left/i)
        expect(paragraphElement).toBeTruthy()
    })

    test('Should be visible', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const paragraphElement = screen.getByText(/1 task left/i)
        expect(paragraphElement).toBeVisible()
    })
})
