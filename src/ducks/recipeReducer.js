// const initialState ={
//     name: '',
//     author: '',
//     category: '',
//     ingredients: [],
//     instructions: [],
//     recipes:[]
// }

//  export const UPDATE_NAME = 'UPDATE_NAME'
//  export const UPDATE_AUTHOR ='UPDATE_AUTHOR'
//  export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
//  export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
//  export const ADD_INSTRUCTIONS ='ADD_INSTRUCTIONS'
//  export const ADD_RECIPE = 'ADD_RECIPE'

//  export default function recipeReducer(state = initialState, action) {
//     switch (action.type) {
//         case UPDATE_NAME:
//             return {...state, name: action.payload};

//             case UPDATE_AUTHOR: 
//             return {...state, author: action.payload};

//         case UPDATE_CATEGORY:
//             return {...state, category: action.payload};

//         case ADD_INGREDIENTS:
//             const newIngredients =[...state.ingredients, action.payload]
//             return {...state, ingredients: newIngredients};

//         case ADD_INSTRUCTIONS:
//             const newInstructions =[...state.instructions, action.payload]
//             return {...state, instructions: newInstructions}

//         case ADD_RECIPE:
//             const{
//                 name,
//                 author,
//                 category,
//                 ingredients,
//                 instructions,
//             } = state;

//             const recipe ={
//                 name,
//                 author,
//                 category,
//                 ingredients,
//                 instructions
//             } 
//             const newRecipe =[...state.recipes, recipe]
//             return {...state, recipes: newRecipe}
//         default: 
//         return state
//     }
// }