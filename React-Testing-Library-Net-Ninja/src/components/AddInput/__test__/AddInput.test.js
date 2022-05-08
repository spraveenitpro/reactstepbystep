import { render, screen, fireEvent } from '@testing-library/react'
import AddInput from '../AddInput'
const mockedSetTodo = jest.fn()

describe('AddInput', () => {
    test('Check the initial text', async () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />)
        const headingElement = screen.getByPlaceholderText(
            /Add a new task here.../
        )
        expect(headingElement).toBeInTheDocument()
    })

    test('Check if the text changes', async () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />)

        const inputElement = screen.getByPlaceholderText(
            /Add a new task here.../i
        )
        fireEvent.change(inputElement, {
            target: { value: 'Go Grocery shopping' },
        })
        expect(inputElement.value).toBe('Go Grocery shopping')
    })

    test('Empty input when add button is clicked', async () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />)

        const inputElement = screen.getByPlaceholderText(
            /Add a new task here.../i
        )
        const buttonElement = screen.getByRole('button', { name: /Add/i })
        fireEvent.change(inputElement, {
            target: { value: 'Go Grocery shopping' },
        })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe('')
    })
})
