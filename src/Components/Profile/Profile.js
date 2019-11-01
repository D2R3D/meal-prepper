import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/store'
import './Profile.css'
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state ={
            favorite_foods: [],
            input: ''
        }
    }

    handleChange(val) {
        this.setState({
          input: val
        });
      }

    favFoods = (id) => {
        const {favorite_foods} = this.state
        axios.put(`/user/foods/${id}`, {favorite_foods}).then(res => {
        this.props.updateUser(res.data.user)
        this.setState({favorite_foods: ''})
       }).catch((err) => console.log(err))
        
    }


    render() {
    
            const mapFoods = this.state.favorite_foods.map((food, i) => {
                return <li key={i}>{food}</li>
            })
        return (
            <div className ='profile-box'>
                <div className ='prof-pic'>
                    <img src ={this.props.user.user.profile_pic} alt='prof-pic'></img>
                </div>
                <div>
                    <Link to='/browse'><button className='prep-btn'>Begin Prepping</button></Link>
                </div>

                <div className ='add-box'>
                    <Link to ='/recipestep1'><button className='prep-btn'>Add a Recipe +</button></Link>
                </div>

                <div>
                    <Link to ='/my-recipes'><button>My Recipes</button></Link>

                </div>
                <div>
                    <p>{mapFoods}</p>
                    
                    <input type ='text'
                           value={this.state.input}
                           placeholder='favorite foods'
                           onChange ={e => this.handleChange(e.target.value)}></input>
                    <button onClick ={() =>this.favFoods()}> Save </button>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user} = reduxState
    return {user}
}

export default withRouter(connect(mapStateToProps,{updateUser})(Profile));
