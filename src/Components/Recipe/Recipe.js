import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import store, {
  createRecipe

  // UPDATE_NAME,
  // ADD_IMG,
  // UPDATE_AUTHOR,
  // UPDATE_CATEGORY,
  // ADD_INGREDIENTS,
  // ADD_INSTRUCTIONS,
  // ADD_RECIPE
} from "../../ducks/store";
import "./Recipe.css";

class Recipe extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      author: reduxState.author,
      category: reduxState.category,
      ingredients: reduxState.ingredients,
      instructions: reduxState.instructions,
      recipe_img: reduxState.recipe_img,
      recipes: reduxState.recipes
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        author: reduxState.author,
        category: reduxState.category,
        ingredients: reduxState.newIngredients,
        instructions: reduxState.newInstructions,
        recipe_img: reduxState.recipe_img
        // recipes: reduxState.recipes
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
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

  submitRecipe = async id => {
    const {
      name,
      author,
      category,
      ingredients,
      instructions,
      recipe_img
    } = this.state;
    const res = await axios.post(`/user/addRecipe/${id}`, {
      name,
      author,
      category,
      ingredients,
      instructions,
      recipe_img
    });
    this.props.createRecipe(res.data.recipe);
    this.props.history.push("/my-recipes");
  };


  render() {
    // const displayIng = this.state.ingredients
    // const displayArr = displayIng.split(',')
      return(
      <div className="recipe-form">
        <div className="input-container">
          Recipe Title
          <input
            type="text"
            placeholder="name"
            onChange={e => this.handleChange(e, "name")}
            value={this.state.name}
          ></input>
          Author
          <input
            type="text"
            placeholder="author"
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

          <div>
            <input
              type="text"
              placeholder="Ingredients"
              onChange={e => this.handleChange(e, "ingredients")}
              value={this.state.ingredients}
            ></input>
    
      

            <input
              type="text"
              placeholder="Instructions"
              onChange={e => this.handleChange(e, "instructions")}
              value={this.state.instructions}
            ></input>
  
          </div>

          <div>
            <input
              type="url"
              placeholder="Image URL"
              onChange={e => this.handleChange(e, "recipe_img")}
              value={this.state.recipe_img}
            ></input>
          </div>
          <Link to="/my-recipes">
            <button className ='add-btn' onClick={() => this.submitRecipe()}>
              Submit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { recipes } = reduxState;
  return { recipes };
}

export default withRouter(
  connect(
    mapStateToProps,
    { createRecipe }
  )(Recipe)
);
