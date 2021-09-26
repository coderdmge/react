import React, { PureComponent } from 'react'

export default class detail extends PureComponent {
    render() {
        console.log(this.props.match)
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}
