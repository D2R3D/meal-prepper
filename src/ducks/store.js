import {createStore} from 'redux'



const initialState ={
    user: null,
    loggedIn: false,
    name: '',
    author: '',
    category: '',
    ingredients: '',
    instructions: '',
    recipe_img: '',
    recipes:[],
    input: ''
}

export const UPDATE_USER ='UPDATE_USER'
 export const UPDATE_NAME = 'UPDATE_NAME'
 export const UPDATE_AUTHOR ='UPDATE_AUTHOR'
 export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
 export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
 export const ADD_INSTRUCTIONS ='ADD_INSTRUCTIONS'
 export const ADD_RECIPE = 'ADD_RECIPE'
 export const ADD_IMG ='ADD_IMG'
//  export const DELETE_RECIPE = 'DELETE_RECIPE'
 export const LOGOUT ='LOGOUT'

 export function reducer(state = initialState, action) {
     const{type, payload} = action
    switch (type) {
        case UPDATE_USER:
                return {...state, user: payload};

        case UPDATE_NAME:
            return {...state, name: payload};

            case UPDATE_AUTHOR: 
            return {...state, author: payload};

        case UPDATE_CATEGORY:
            return {...state, category: payload};

        case ADD_IMG: 
            return{...state, recipe_img: payload}
    

        case ADD_INGREDIENTS:
            // const newIngredients =[...state.ingredients, payload]
            return {...state, ingredients: payload};

        case ADD_INSTRUCTIONS:
            // const newInstructions =[...state.instructions, payload]
            return {...state, instructions: payload}
    
      
        case ADD_RECIPE:
            
            const{
                name,
                author,
                category,
                ingredients,
                instructions,
                recipe_img
            } = state;

            const recipe ={
                name,
                author,
                category,
                ingredients,
                instructions,
                recipe_img
            } 
            const newRecipe =[...state.recipes, recipe]
            
            return {...state, recipes: newRecipe}
            
        default: 
        return state
    }

}

export function updateUser (user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}


export function createRecipe (recipes){
    return{
        type: ADD_RECIPE,
        payload: recipes
    }
}

export function addIngredients(newIngredients) {
    return {
        type:ADD_INGREDIENTS,
        paylod: newIngredients
    }
}


export function addInstructions(newInstructions){
    return{
        type: ADD_INSTRUCTIONS,
        payload: newInstructions
    
    }
}



export function logout() {
    return {
        type: LOGOUT
    }
}

 
export default createStore(reducer)
