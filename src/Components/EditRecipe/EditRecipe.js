import React, { Component } from "react";
import axios from "axios";
import store from '../../ducks/store'

export default class EditRecipe extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      name: reduxState.name,
      author: reduxState.author,
      category: reduxState.category,
      ingredients: reduxState.ingredients,
      instructions: reduxState.instructions,
      recipe_img: reduxState.recipe_img
    };
  }


  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  handleCategoryChange(catVal) {
    this.setState({
      category: catVal
    });
  }

  editRecipe = () => {
    const { name, author, category, instructions, ingredients, recipe_img } = this.state;
    axios
      .put(
        `/user/recipes/update/${this.props.match.params.id}`,{
        name,
        author,
        category,
        instructions,
        ingredients,
        recipe_img}
      )
      .then(() => {
        this.props.history.push('/my-recipes');
      });
  };
  render() {
    return (
      <div>
        <div>
          <input
            className="inputs"
            placeholder="Title"
            onChange={e => this.handleChange(e, "name")}
            value={this.state.name}
        ></input>

          <input
            className="inputs"
            placeholder="Author"
            onChange={e => this.handleChange(e, "author")}
            value={this.state.author}
          ></input>

<div className="input_container">
            <h2>Category:</h2>
            <select
              value={this.state.category}
              onChange={e => this.handleCategoryChange(e.target.value)}
            >
              <option value={""}>----</option>
              <option value={"Breakfast"}>Breakfast</option>
              <option value={"Second Breakfast"}>Second Breakfast</option>
              <option value={"Brunch"}>Brunch</option>
              <option value={"Lunch"}>Lunch</option>
              <option value={"Dinner"}>Dinner</option>
              <option value={"Drinks"}>Drinks</option>
              <option value={"Dessert"}>Dessert</option>
            </select>
          </div>



          <input
            className="inputs"
            placeholder="Ingredients"
            value={this.state.ingredients}
            onChange={e => this.handleChange(e, "ingredients")}
          ></input>

           <input
            className="inputs"
            placeholder="instructions"
            onChange={e => this.handleChange(e, "instructions")}
            value={this.state.instructions}  
          ></input>

          <input type ='url'
                 placeholder='Image URL'
                 onChange ={e => this.handleChange(e, 'recipe_img')}
                 value={this.state.recipe_img}
                 ></input>
          <button onClick ={this.editRecipe}> Submit / Finish</button>
        </div>
      </div>
    );
  }
}
