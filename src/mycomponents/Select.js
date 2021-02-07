import React, { Component } from 'react'

export default class Select extends Component {


    constructor(){
        super();
        this.state={

            city1:"Dhaka",
            city2:"Rajshahi",
            city3:"Khulna",
            city4:"Chuadanga",
            city5:"Damurhuda",
            city6:"Bishnupur",
            show : ""

        }
    }

    onChangeHandler=(event)=>{
        var SeletedValue=event.target.value;
        this.setState({show:SeletedValue});

    }

    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.show} >
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                    <option>{this.state.city5}</option>
                    <option>{this.state.city6}</option>
                </select>
                
            </div>
        )
    }
}
