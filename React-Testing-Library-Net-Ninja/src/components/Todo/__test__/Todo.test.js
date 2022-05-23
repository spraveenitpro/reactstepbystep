import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Todo from '../Todo'

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}
let tasks = [
    'Go Grocery shopping',
    'Call icbc for address change',
    'Get a shave',
]
const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button', { name: /Add/i })

    tasks.forEach((task) => {
        fireEvent.change(inputElement, {
            target: { value: task },
        })
        fireEvent.click(buttonElement)
    })
}

describe('Todo', () => {
    test('Should render same test passed to title prop', async () => {
        render(<MockTodo />)
        addTask(['Go Grocery shopping'])
        const divElement = screen.getByText(/Go Grocery shopping/i)
        expect(divElement).toBeInTheDocument()
    })

    test('Should render All todos passed', async () => {
        render(<MockTodo />)
        addTask(tasks)
        const divElements = screen.getAllByTestId('task-container')
        expect(divElements.length).toBe(3)
    })

    test('Checking tasks if not completed when added', async () => {
        render(<MockTodo />)
        addTask(['Go Grocery shopping'])
        const divElement = screen.getByText(/Go Grocery shopping/i)
        expect(divElement).not.toHaveClass('todo-item-active')
    })

    test('Checking tasks if completed when cliked', async () => {
        render(<MockTodo />)
        addTask(['Go Grocery shopping'])
        const divElement = screen.getByText(/Go Grocery shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active')
    })
})
