import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'
console.log(data)
function App() {
    const cards = data.map((item) => (
        <Card
            image={item.coverImg}
            title={item.title}
            price={item.price}
            rating={item.stats.rating}
            reviewcount={item.stats.reviewCount}
            location={item.location}
            key={item.id}
            openspots={item.openSpots}
        />
    ))
    return (
        <>
            <Navbar />
            <Hero />
            <section className="cards-list">{cards}</section>
        </>
    )
}

export default App
