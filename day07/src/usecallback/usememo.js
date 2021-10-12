import React, {useState, useMemo}from 'react'
function getSum (counter) {
    console.log("getsum 被从新渲染")
    let totall = 0
    for(var i =0 ; i< counter; i++) {
        totall += i
    }
    return totall
}

export default function Usememo() {
   
    const [state, setstate] = useState(10)
    const [show, setshow] = useState(true)
  
       const totall = useMemo(() => {
           return getSum(state)
       }, [state])
    return (
        <div>
            当前计数 {totall}<br/>
            <button onClick={() => setstate(state + 1)}>+1</button>
            <button onClick={() => {setshow(!show)}}>show切换</button>
        </div>
    )
}
