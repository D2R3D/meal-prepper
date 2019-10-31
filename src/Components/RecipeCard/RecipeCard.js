import React from 'react'


let RecipeCard = props => {
    const {
      name,
      author,
      category,
      ingredients,
      instructions
    } = props;
    const ingredientsDisplay = ingredients.map((ingredient, i) => {
      return <li key={i}>{ingredient}</li>;
    });
    const instructionsDisplay = instructions.map((instruction, i) => {
      return <li key={i}>{instruction}</li>;
    });

    return (
        <div>
        <div className="title_container">
        <h2>{name}</h2>
        <p>
        by {author}
      </p>
        <p>Meal: {category}</p>
      </div>
   
      <h3>Ingredients:</h3>
      <div className="scroll_container">
        <ul className="list">{ingredientsDisplay}</ul>
      </div>
      <h3>Instructions:</h3>
      <div className="scroll_container">
        <ol className="list">{instructionsDisplay}</ol>
      </div>

      </div>
    )
}

export default RecipeCard