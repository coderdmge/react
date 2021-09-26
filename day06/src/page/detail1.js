import React, { PureComponent } from 'react'

export default class detail1 extends PureComponent {
    render() {
        console.log(this.props.location)
        return (
            <div>
                {this.props.location.state.name}
            </div>
        )
    }
}
