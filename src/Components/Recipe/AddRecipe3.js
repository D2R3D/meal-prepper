import React, { Component } from 'react'
import store, {ADD_INSTRUCTIONS, ADD_RECIPE} from '../../ducks/store'
import {Link} from 'react-router-dom'
// import axios from 'axios';



export default class AddRecipe3 extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state ={
            instructions: reduxState.instructions,
            input: ''
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
            instructions: reduxState.instructions,

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

      addInstruction() {
        store.dispatch({
          type: ADD_INSTRUCTIONS,
          payload: this.state.input
        })
        // Send data to Redux state
        this.setState({instructions: '',
          input: ""
        });
      }
    //   addRecipe = () =>{
    //              const res = await axios.post(`/user/recipe/${id}`, {name: this.props.name, author: this.props.author, category: this.props.category, ingredients: this.props.ingredients, instructions: this.state.instructions} )
    //     this.props.addRecipe(res.data.recipe)
    //   }
      create(){
        store.dispatch({
          type: ADD_RECIPE,
          payload: this.state.input
        })
      
         
    
        this.setState({input:"", instructions: ''})
        // Create new recipe in Redux state
      }

    render() {

        const mapInstructions = this.state.instructions.map((instructions, i) => {
            return <li key={i}>{instructions}</li>; })

        return (
            <div>


                <div>
                    <ul>{mapInstructions}</ul>
                </div>
                <div>
                    <input value ={this.state.input}
                           onChange={e => this.handleChange(e.target.value)}></input>
                    <button className ='add-btn'
                            onClick={() => this.addInstruction()}> Add Instruction</button>
                </div>
                <Link to ='/my-recipes' ><button onClick ={() => this.create()}>Complete</button></Link>
                
            </div>
        )
    }
}
