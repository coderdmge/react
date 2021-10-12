import React ,{useState} from 'react'

export default function HooksCounter() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            当前计数： {counter}
            <br/>
            <button onClick={() => setCounter(counter+1)}>+1</button>
            <button onClick={() => setCounter(counter-1)}>-1</button>
        </div>
    )
}
