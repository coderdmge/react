import React, { PureComponent } from 'react'
import instance from "./service/request"

export default class App extends PureComponent {
    componentDidMount() {
        instance({
            url: "/post",
            data: {
                name: "deng"
            },
            method: "post"
        }).then(console.log).catch(console.log)
     
     }
    
    render() {
        return (
            <div>
               
              app
            </div>
        )
    }
}
