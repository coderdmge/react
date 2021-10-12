import React, {useState} from 'react'

export default function Frends() {
    const arr = useState([
        {name: "deng", age: 12 , id: 1},
        {name: "ming", age: 12 , id: 2},
        {name: "gui", age: 12 , id: 3}
    ])
    const frends = arr[0]
    const setFrends = arr[1]
    function changeAge(index) {
        const newFrends = [...frends]
        newFrends[index].age += 1
        setFrends(newFrends)
    }
       
    
    return (
        <div>
            {
                frends.map((item, index) => {
                return (
                    <li key={item.id}>
                        姓名： {item.name} 
                        年龄： {item.age} 
                        <button onClick={() => changeAge(index)}>age+1</button>
                        </li>
                    
                )
                })
            }  
            <button onClick={() => {setFrends([...frends, {name: "jjj", age: 23, id: 4}])}}>添加</button>
        </div>
    )
   
}
