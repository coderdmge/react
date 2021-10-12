import React, {useState, useMemo,memo} from 'react'
const MYbutton = memo(
    (props) => {
        console.log("mybuton被从新渲染")
    return <h2>姓名： {props.info.name} 年龄： {props.info.age}</h2>
    }
)

export default function Usememo1() {
    const [show, setshow] = useState(true)
    const info = useMemo(() => {
        return {name: "deng", age:23}
    },[])
    
    return (
        <div>
            <MYbutton info= {info}/>
            <button onClick={()=> setshow(!show)}>切换show</button>
        </div>
    )
}
