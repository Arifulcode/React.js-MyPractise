import React, { Component } from 'react'
import  axios from 'axios';

export default class CountryList extends Component {

    constructor(){
        super()
        this.state={
            mydata:[]
        }
    }
//get data from http use
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            
            this.setState({mydata:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }


    render() {

        const countryList = this.state.mydata
        const countryName= countryList.map((countryList)=>{
            return <h1>{countryList.name}</h1>
        })



        return (
            <div>
                {countryName}
            </div>
        )
    }
}
