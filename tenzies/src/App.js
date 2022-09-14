import Die from './components/Die';
import './App.css';

function App() {
  return (
   <main>
    <div className="dice-container">
        <Die id={1} />
        <Die id={2} />
        <Die id={3} />
        <Die id={4} />
        <Die id={5} />
        <Die id={6} />
        <Die id={7} />
        <Die id={8} />
        <Die id={9} />
        <Die id={10} />

    </div>
   </main>
  );
}

export default App;
