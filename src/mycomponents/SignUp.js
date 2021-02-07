import React, { Component } from 'react'

export default class SignUp extends Component {

    constructor(){
        super();
        this.state={
            fname:"",
            lname:"",
            email:"",
            mobile:""
        }
    }

    onChangeHandler=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue});

        if(inputName==='fname'){
            var namepattern=/^([a-zA-z ]){2,30}$/;
            if(!namepattern.test(inputValue)){
                this.setState({fname:"First Name is not valid"});
            }
        }
        if(inputName==='lname'){
            var namepattern=/^([a-zA-z ]){2,30}$/;
            if(!namepattern.test(inputValue)){
                this.setState({lname:"Last Name is not valid"});
            }

        }
        if(inputName==='email'){
            var emailpattern=/\S+@\S+\.\S+/;
            if(!emailpattern.test(inputValue)){
                this.setState({email:"Email is not valid"});
            }
        }
        if(inputName==='mobile'){
            
            if(!Number(inputValue)){
                this.setState({mobile:"Mobile Number is not valid"});
            }
        }



    }

    render() {
        return (
            <div>
                <h1>this is signup Form</h1>
                <h3>First Name:{this.state.fname}</h3>
                <h3>Last Name:{this.state.lname}</h3>
                <h3>Email Address:{this.state.email}</h3>
                <h3>Mobile Number:{this.state.mobile}</h3>
                <form>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="Enter your First Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Enter your last Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Enter your email address"></input><br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Enter your mobile number"></input><br></br>
                    <input type="submit" value="SaveNow"></input>

                </form>
            </div>
        )
    }
}
