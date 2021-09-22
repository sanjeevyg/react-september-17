import useQuote from './UseQuote.js';


import React from 'react'


export default function CustomQuote() {

    const [count, increase, decrease, quote] = useQuote(1)
    console.log({count})
    return (
        <div className="quote">
            <h1>Count: {count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <img src={quote} alt={quote} width="900" height="400"/>
        </div>
    )
}

