import {PureComponent} from "react"
import {storeContext} from "./context"
function connect(stateToProps, dispatchToProps) {
    return function(Wrap) {
        class WrapContext extends PureComponent {
            constructor(props,context) {
                super(props,context)
                this.state = {
                    storState: stateToProps(context.getState())
                }
            }
            componentDidMount() {
              this.cancele =  this.context.subscribe(()=> {
                    this.setState({
                        storState: stateToProps(this.context.getState())
                    })
                })
            }
            componentWillUnmount() {
                this.cancele()
            }
            render() {
                return (
                    <Wrap {...this.props}
                        {...stateToProps(this.context.getState())}
                        {...dispatchToProps(this.context.dispatch)}
                    />
                )
            }
        }
        WrapContext.contextType = storeContext
        return WrapContext
    }
}
export default connect