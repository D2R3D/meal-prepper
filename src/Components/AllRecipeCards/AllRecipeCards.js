import React from "react";
import './AllRecipeCards.css'

export default function AllRecipeCards(props) {
  const {
    name,
    author,
    category,
    ingredients,
    instructions,
    recipe_img
  } = props.AllRecipeCards;
  // const ingredientsDisplay = ingredients.map((ingredient, i) => {
  //   return <li key={i}>{ingredient}</li>;
  // });
  // const instructionsDisplay = instructions.map((instruction, i) => {
  //   return <li key={i}>{instruction}</li>;
  // });

  return (
    
        <div className="recipe-box">
          <div className='recipe-card'>
            <div className ='title-box'>
            <h2>{name}</h2>
            <p >by {author}</p>
            <p >Meal: {category}</p>
            </div>
          <h3>Ingredients:</h3>
          
            <ul className="list">{ingredients}</ul>
        
          <h3>Instructions:</h3>
    
            <ul className="list">{instructions}</ul>

           
   
            </div>
            <div>
              <img id ='recipe-img' src={recipe_img} alt='recipe-img'></img>
              <div>
            <button> Add to List </button>
            </div>
            </div>
         

        </div>
        

  );
}
// function mapStateToProps(state){
//   return state
// }

// export default withRouter(connect(mapStateToProps)(RecipeCard))
