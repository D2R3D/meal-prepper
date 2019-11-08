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
       
        }
    }

    handleChange = (e, key) => {
        this.setState({
          [key]: e.target.value
        });
      };


    render() {
    
        return (
            <div className ='profile-box'>
                <div className ='prep-btn'>
                    <img src ={this.props.user.profile_pic} alt='prof-pic'></img>
                    <button> edit image </button>
                </div>
                <div>
                    <Link to='/browse'><button className='prep-btn'>Begin Prepping</button></Link>
                </div>

                <div className ='add-box'>
                    <Link to ='/add-recipe'><button className='prep-btn'>Add a Recipe +</button></Link>
                </div>

                <div>
                    <Link to ='/my-recipes'><button className='prep-btn'>My Recipes</button></Link>

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
