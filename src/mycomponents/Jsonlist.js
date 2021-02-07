import React, { Component } from 'react'

export default class Jsonlist extends Component {
    render() {

        const myList=[

            {
                name:"Ariful Islam",
                email:"e.arifulislam@gmail.com",
                mobile:"01938860326",
                age:"27",
                city:"Dhaka",
                village:"Bishnupur"
            },
            {
                name:"kaniz Robayna",
                email:"kanizrobayna@gmail.com",
                mobile:"01938235360",
                age:"25",
                city:"Damurhuda",
                village:"Bishnupur(master para)"
            },
            {
                name:"Imran Hossain",
                email:"imran@gmail.com",
                mobile:"01738860326",
                age:"17",
                city:"Khulna",
                village:"Bishnupur(kasari para)"
            },
            {
                name:"Moniruzzaman monir",
                email:"monir@gmail.com",
                mobile:"0193546351",
                age:"36",
                city:"Chuadanga",
                village:"Dhamrai"
            },
            {
                name:"Rajon kormokar",
                email:"razon@gmail.com",
                mobile:"2164156651354",
                age:"30",
                city:"Dhaka",
                village:"savar"
            },

        ];
        const dataItemsName = myList.map((data) => {
            return <option>{data.name}</option>
        })
        const dataItemsAge = myList.map((data) => {
            return <option>{data.age}</option>
        })
        const dataItemsEmail = myList.map((data) => {
            return <option>{data.email}</option>
        })
        const dataItemsMobile = myList.map((data) => {
            return <option>{data.mobile}</option>
        })
        const dataItemsCity = myList.map((data) => {
            return <option>{data.city}</option>
        })
        const dataItemsVillage = myList.map((data)=>{
            return <option>{data.village}</option>
        })

        return (
            <div>
                <select>{dataItemsName}</select><br></br>
                <select>{dataItemsAge}</select>
                <select>{dataItemsEmail}</select>
                <select>{dataItemsMobile}</select>
                <select>{dataItemsCity}</select>
                <select>{dataItemsVillage}</select>
            </div>
        )
    }
}
