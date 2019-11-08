import React from "react";
import './AllRecipeCards.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'
import {Link} from 'react-router-dom'


export function AllRecipeCards(props) {
  const {
    name,
    author,
    category,
    ingredients,
    instructions,
    recipe_img,
    id
  } = props.AllRecipeCards;

  // const ingredientsDisplay = ingredients.map((ingredient, i) => {
  //   return <li key={i}>{ingredient}</li>;
  // });
  // const instructionsDisplay = instructions.map((instruction, i) => {
  //   return <li key={i}>{instruction}</li>;
  // });

if (props.location.pathname ==='/my-recipes') {
  return(
    
        <div className="recipe-box">
         
          <img id ='recipe-img' src={recipe_img} alt='recipe-img'></img>

          <div className ='title-box'>
            
          <h2>{name}</h2>
            
            {/* <p >by {author}</p> */}
            {/* <p >Meal: {category}</p> */}
           

            <div>
              

              <div>
            <button> Add</button>

            </div>
            </div>

            </div>
          
         
          <div className='recipe-card'>

          <h3>Ingredients:</h3>
          
            <ul className ='list'>
             <li>{ingredients} </li>
            </ul>
        
          <h3>Instructions:</h3>
    
            <ul className="list">{instructions}</ul>

            </div>
            <button className ='btns' onClick ={() => {
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  axios.delete(`/user/recipe/${id}`)
                }
              })
             }}> Delete> </button>

              <Link to ={`/edit/recipe/${id}`}><button> Edit Recipe </button></Link>
          

        </div>
        

  );
} else {
  return(
    
    <div className="recipe-box">
     
      <img id ='recipe-img' src={recipe_img} alt='recipe-img'></img>

      <div className ='title-box'>
        
      <h2>{name}</h2>
        
        {/* <p >by {author}</p> */}
        {/* <p >Meal: {category}</p> */}
       

        <div>
          

          <div>
        <button> Add</button>

        </div>
        </div>

        </div>
      
     
      <div className='recipe-card'>

      <h3>Ingredients:</h3>
      
        <ul className ='list'>
         <li>{ingredients} </li>
        </ul>
    
      <h3>Instructions:</h3>

        <ul className="list">{instructions}</ul>

        </div>
      

    </div>
    

);
}
}
function mapStateToProps(recipes){
  return recipes
}

export default withRouter(connect(mapStateToProps)(AllRecipeCards))
