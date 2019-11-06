import React, { Component } from 'react'

export default class recipeB extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            author: '',
            category:'',
            ingredients: [],
            instructions: [],
        }
    }

    handleChange = (val) => {
        this.setState({
            input:val
        })
    }


    render() {
        return (
            <div>


                
            </div>
        )
    }
}
