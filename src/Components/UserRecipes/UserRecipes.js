import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store  from '../../ducks/store'
import AllRecipeCards from '../AllRecipeCards/AllRecipeCards'
import axios from 'axios';
import './UserRecipes.css'

export default class UserRecipes extends Component {
    constructor(props) {
        super(props)
        const reduxState =store.getState()
        this.state ={
            recipes: reduxState.recipes
        }
    }

    componentDidMount() {
        this.getUserRecipes()
    }
  

    getUserRecipes = id => {
        axios.get(`/user/recipes`).then(response => {
            this.setState({ recipes: response.data})
        })
    
    }
   


    removeRecipe(id) {
        axios.delete(`/user/recipe/${id}`).then(response => this.getUserRecipes({recipes: response.data}));
    }

    render() {
            const mapRecipes = this.state.recipes.map((element) => {
                return <AllRecipeCards key ={element.id} AllRecipeCards={element}/>
            })
        return (
            <div className ='recipe-container'>
                <Link to ='/add-recipe'><button id='new-recipe'>Create a New Recipe</button></Link>
                <div>
                <div>{mapRecipes}</div>
                </div>
            </div>
        )
    }
}
