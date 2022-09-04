import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Page() {
    return (
        <div>
            <Header />
            <h1>Fun Facts about React</h1>

            <ol>
                <li>Was first released in 2013</li>
                <li>Originally created by Jordan Walke</li>
                <li>Has 100K stars on Github</li>
                <li>Maintained by Facebook</li>
            </ol>
            <Footer />
        </div>
    )
}

export default Page
