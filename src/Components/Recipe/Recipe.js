import React, { Component } from 'react'
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            author: '',
            category: '',
            ingredients: [],
            instructions: []
        }
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

      addRecipe = (id) => {
          const {name, author, category, ingredients, instructions} = this.state
          axios.post(`/user/recipe/${id}`, {name, author, category, ingredients, instructions}).then(console.log('Recipe Added'))
        setTimeout(() => {
            
            this.props.history.push('/dashboard')
        }, 150)
    };

    render() {
        const {name, author, category ,ingredients, instructions} = this.state
        const {id} = this.props
        return (
            <div>

                <div>
                    <input type='text'
                           placeholder ='name'
                           onChange ={e => this.handleChange(e, 'name')}></input>
                    
                    <input type='text'
                           placeholder ='author'
                           onChange ={e => this.handleChange(e, 'name')}></input>


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
                <input type ='text'
                       placeholder ='Ingredients'
                       onChange ={e => this.handleChange(e, 'ingredients')}><button></button></input>


                    <input type ='text'
                       placeholder ='Instructions'
                       onChange ={e => this.handleChange(e, 'instructions')}></input>
            </div>

                </div>
            <Link to ='/my-recipes'><button onClick ={this.addRecipe}></button></Link>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {id: state.id}
} 

export default withRouter(connect(mapStateToProps)(Recipe))
