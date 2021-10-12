import React, { useState, useCallback, memo} from 'react'
const Mybutton = memo(
    (props) => {
        console.log("mybutton被从新渲染", props.title)
        return <button onClick={props.increment}>mybutton+1</button>
    }
)

export default function Usecallback() {
  const [counter, setCounter] =  useState(0)
  const [show, setShow] = useState(true)
    const increment1 = () => {
        console.log("increment1被执行")
        setCounter(counter+1)
    }
    const increment2 = useCallback(
       () => {
        console.log("increment2被执行")
        setCounter(counter + 1)
       },[counter]

    )
    return (
        <div>
            当前计数： {counter}<br/>
            <Mybutton title="btn01" increment={increment1}></Mybutton>
            <Mybutton title="btn02" increment={increment2}></Mybutton>
            <button onClick={() => {setShow(!show)}}>show切换</button>
        </div>
    )
}
