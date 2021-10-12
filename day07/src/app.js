import React, { PureComponent } from 'react'
// import Counter from "./hooksCounter"
// import Frends from './frends'
import Usecallback from "./usecallback/usecallback"
// import UseMemo from "./usecallback/usememo"
// import UseMemo1 from "./usecallback/usememo1"

export default class app extends PureComponent {
    render() {
        return (
            <div>
                {/* <Counter/>
                <Frends/> */}
                <Usecallback/>
                {/* <UseMemo/> */}
                {/* <UseMemo1/> */}
            </div>
        )
    }
}
