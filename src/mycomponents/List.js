import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const country=['Bangladesh','India','Pakistan','China','Canada']
        const listItems = country.map((mydata)=>{
            return <option>{mydata}</option>
        })
        return (
            <div>
                <select>
                    {listItems}
                </select>
            </div>
        )
    }
}
