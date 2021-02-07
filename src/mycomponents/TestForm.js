import React, { Component } from 'react'

export default class TestForm extends Component {
    
    constructor (){
        super();
        this.state={
            userName:""
        }

    }
    
    onChangeHandler=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue})

    }
    onSubmitHandler=()=>{
        alert(this.state.userName);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>{this.state.userName}</p>
                    <input onChange={this.onChangeHandler} name="userName" type='text' placeholder="Enter your name" ></input><br></br>
                    <input type='submit' value="SubmitNow" ></input>
                </form>
            </div>
        )
    }
}
