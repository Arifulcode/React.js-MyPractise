import React, { Component } from 'react'

export default class PostDataServer extends Component {

    constructor(props) {
        super()
        this.state={
            postData:''
            postResult:''

        }
    }
    onClickHandler=()=>{

    }
    onChangeHandler=()=>{

    }
    onChangeHandler(){

    }



    render() {
        return (
            <div>
                <input onChange={this.onChangeHandler} type="text"/>
                <button onclick={this.onClickHandler()}></button>
            </div>
        )
    }
}
