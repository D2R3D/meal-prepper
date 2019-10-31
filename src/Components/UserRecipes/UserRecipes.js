import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store  from '../../ducks/store'
import RecipeCard from '../RecipeCard/RecipeCard'

export default class UserRecipes extends Component {
    constructor(props) {
        super(props)
        const reduxState =store.getState()
        this.state ={
            recipes: reduxState.recipes
        }
    }
    render() {
        const recipes = this.state.recipes.map((recipe, i) => {
            return ( <RecipeCard 
                key ={i}
                name ={recipe.name}
                author ={recipe.author}
                category ={recipe.category}
                ingredients ={recipe.ingredients}
                instructions = {recipe.instructions} />
                )
        })
        return (
            <div>
                <Link to ='/recipestep1'><button>Create a New Recipe</button></Link>
                <div className="recipe-container">{recipes}</div>
                
            </div>
        )
    }
}
