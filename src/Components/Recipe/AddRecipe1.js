import React, { Component } from 'react'
// import './Recipe.css'
import {Link} from 'react-router-dom'
import store, {UPDATE_NAME, UPDATE_AUTHOR, UPDATE_CATEGORY} from '../../ducks/store'

export default class AddRecipe1 extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            author: reduxState.author,
            category: reduxState.category,
            input: ''
        }
    }

    componentDidMount() {
       this.unsubscribe = store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
            name: reduxState.name,
            author: reduxState.author,
            category: reduxState.category
          })
        })
      }

      componentWillUnmount() {
          this.unsubscribe()
      }
    

      handleName(val) {
        this.setState({
          name: val
        });
      }

      handleAuthor(val) {
        this.setState({
          author: val
        });
      }

    handleCategoryChange(catVal) {
        this.setState({
          category: catVal
        });
      }

      saveChanges() {
        store.dispatch({
          type: UPDATE_NAME,
          payload: this.state.name
        });
        store.dispatch({
          type: UPDATE_AUTHOR,
          payload: this.state.author
        });
        store.dispatch({
            type: UPDATE_CATEGORY,
            payload: this.state.category
        })
        // Send data to Redux state
      }


    render() {
        return (

            <div className='recipe-box'>
            <div className ='recipe-form'>
                <form className='input-boxes'>
                    <p>Recipe Title:</p>
                <input type='text'
                           placeholder='name'
                           value={this.state.name}
                           onChange ={e => this.handleName(e.target.value)}></input>
                        <p>Author Name: </p>
                    <input type='text'
                           placeholder='author'
                           value={this.state.author}
                           onChange ={e => this.handleAuthor(e.target.value)}></input>

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
        <Link to ='/recipe-step-2'><button onClick={() => this.saveChanges()}>Next</button></Link>
        <Link to='/profile'><button onClick={() => this.saveChanges()}>Cancel</button></Link>
        </div>
        </form>
             
            </div>
            
            </div>
        )
    }
}
