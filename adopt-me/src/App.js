import './App.css'
import Pet from './Pet'

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Fido" animal="Dog" breed="Pitbull" />
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Doink" animal="Cat" breed="Mix" />
        </div>
    )
}

export default App
