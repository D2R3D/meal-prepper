import React, { Component } from 'react'
import store from '../../ducks/store'
import {ADD_INGREDIENTS} from '../../ducks/store'
import {Link} from  'react-router-dom'


export default class AddRecipe2 extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state ={
            ingredients: reduxState.ingredients,
            input: ''
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
            ingredients: reduxState.ingredients,

          })
        })
      }

      componentWillUnmount() {
          this.unsubscribe()
      }

   
      handleChange(val) {
        this.setState({
          input: val
        });
      }

    addIngredient(action) {
        store.dispatch({
          type: ADD_INGREDIENTS,
          payload:this.state.input
        })
        // Send data to Redux state
        this.setState({
          input: ""
        });
      }

      
    render() {


        const mapIngredients = this.state.ingredients.map((ingredients, i) => {
            return <li key={i}>{ingredients}</li>})
        
        return (
            <div>
                <h2>Ingredients:</h2>
                <div>
                    <ul> {mapIngredients}</ul>
                </div>

                <div>
                    <input value ={this.state.input}
                            onChange ={e => this.handleChange(e.target.value)}></input>
                            <button className='add-btn'
                                    onClick ={() => this.addIngredient()}>Add Ingredient</button>
                </div>

                <div>
                    <Link to ='/recipestep1'><button> Previous</button></Link>
                    <Link to ='/recipe-step-3'><button className ='add-btn'>Next</button></Link>
                </div>
         
                
            </div>
        )
    }
}
