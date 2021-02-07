import React, {Component} from 'react'

class Welcome extends Component{
    render() {
        return <h3>Employee_Name:{this.props.name} || Employee_Age:{this.props.age} || Educational Qualification: {this.props.deg}</h3> ;
    }
}
export default Welcome;