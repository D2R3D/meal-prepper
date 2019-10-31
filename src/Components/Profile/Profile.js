import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'
import './Profile.css'
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state ={
            favorite_foods: []
        }
    }

    favFoods = async () => {
        const {favorite_foods} = this.state
        const res = await axios.post('/profile/user', {favorite_foods})
        this.props.updateUser(res.data.user)
    }


    render() {
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
                
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user} = reduxState
    return {user}
}

export default withRouter(connect(mapStateToProps,{updateUser})(Profile));
