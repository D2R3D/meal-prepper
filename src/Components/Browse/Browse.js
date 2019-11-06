import React, { Component } from "react";
import AllRecipeCards from "../AllRecipeCards/AllRecipeCards";
import axios from "axios";
import store from '../../ducks/store'

import './Browse.css'
export default class Browse extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      recipes: reduxState.recipes
    };
  }

  getRecipes = () => {
    axios.get("/user/allRecipes").then(response => {
      this.setState({ recipes: response.data });
    });
  };

  componentDidMount() {
    this.getRecipes();
  }


  addToDashboard =(id) => {
    axios.post(`user/dashRecipe/${id}`).then(response => {
        this.setState({recipes: response.data})
    })
}

  render() {
const allRecipes = this.state.recipes.map((element) => {
    return <AllRecipeCards key={element.id} AllRecipeCards ={element} />
})
 
    return (
      <div className ='browse-box'>
        <div>
        <div className ='map-recipes'>
            {allRecipes}
        
        </div>
  
        

        </div>
    
      </div>
    );
  }
}
