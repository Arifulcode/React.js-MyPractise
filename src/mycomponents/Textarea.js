import React, { Component } from 'react'

export default class Textarea extends Component {

    constructor(){
        super();
        this.state={
            desc:"Description text insert from state."
        }
    }
    render() {
        return (
            <div>
                <textarea value={this.state.desc}></textarea>
            </div>
        )
    }
}
