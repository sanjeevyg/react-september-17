import { useState, useEffect } from 'react';

export default function UseQote(initialCount) {

    const [count, setCount] = useState(initialCount)
    const [quote, setQuote] = useState('')


    const quoteURL = `https://web-series-quotes.herokuapp.com/generate/moneyheist/${count}/image?src=moneyheist&size=150&color=lightyellow`

    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

    const fetchQuote = () => {
        setQuote(quoteURL)
    }
    console.log(count)

    console.log(quote)

    useEffect(() => {fetchQuote()}, [count])

    return [count, increase, decrease, quote]
}
