import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store  from '../../ducks/store'
import AllRecipeCards from '../AllRecipeCards/AllRecipeCards'
import axios from 'axios';

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

    getUserRecipes=() => {
        axios.get('/user/allRecipes').then(response => {
            this.setState({ recipes: response.data})
        })
    }
    render() {
            const mapRecipes = this.state.recipes.map((element) => {
                return <AllRecipeCards key ={element.id} AllRecipeCards={element}/>
            })
        return (
            <div>
                <Link to ='/add-recipe'><button>Create a New Recipe</button></Link>
                <div className="recipe-container">{mapRecipes}</div>
                
            </div>
        )
    }
}
