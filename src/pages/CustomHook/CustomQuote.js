import useQuote from './UseQuote.js';


import React from 'react'


export default function CustomQuote() {

    const [count, increase, decrease, quote] = useQuote(1)
    return (
        <div className="quote">
            <h1>Count: {count}</h1>
            <div className="imageButton">
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
            <div className="quoteBackground">
                <img src={quote} alt={quote} width="700" height="400"/>
            </div>
        </div>
    )
}

