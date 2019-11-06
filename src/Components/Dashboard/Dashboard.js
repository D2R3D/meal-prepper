import React, { Component } from 'react'
import AllRecipeCards from '../AllRecipeCards/AllRecipeCards'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            recipes: []
        }
    }

    componentDidMount = () => {
        this.getRecipes()
    }
    getRecipes(id) {
        axios.get(`/user/dashboard/${id}`).then(response => {
            this.setState({recipes: response.data})
        })
    }



    render() {


        return (
            <div>
                <div>
                    {this.state.recipes.map((element => {
                        return <AllRecipeCards key={element.id} AllRecipeCards ={element}/>
                    }))}

                </div>
                
            </div>
        )
    }
}
