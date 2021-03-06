import React from 'react'

/**
 * It returns a header element with a header tag, an h1 tag, a span tag, and a h3 tag
 */
const Header = ({ tagline }) => (
    <>
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of"> of </span>
                    <span className="the"> the</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{tagline}</span>
            </h3>
        </header>
    </>
)

export default Header
