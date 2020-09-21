import React,{Component} from 'react'
export default  class LayoutContainer extends Component {
    constructor(prop) {
        super(prop);
    }
    componentDidMount() {
        console.log(this.prop)
    }
    render() {
        return(
            <div>
                layout
            </div>
        )
    }
}