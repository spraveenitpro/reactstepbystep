import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

test('Should render list of followers', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')
    expect(followerDivElement).toBeInTheDocument()
})

test('Should render 5 followers', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findAllByTestId(/follower-item/i)
    expect(followerDivElement.length).toBe(5)
})
