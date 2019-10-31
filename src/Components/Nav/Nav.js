import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { connect } from "react-redux";
import store, { updateUser, logout } from "../../ducks/store";
import {withRouter, Link} from 'react-router-dom'
import './Nav.css'


class Nav extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      username: reduxState.username,
      password: reduxState.password
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const reduxState = store.getState() 
      this.setState({username: reduxState.username,
       password: reduxState.password})
    })
  }
  
  componentWillUnmount() {
    this.unsubscribe()
}

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  login = async () => {
    const { username, password } = this.state;
    const res = await axios.post('/auth/login', { username, password })
    if (res.data.user) {
      this.props.updateUser(res.data.user)
      this.props.history.push('/dashboard')
      this.setState({
          password: ''
      })
      swal.fire(res.data.message)
    } else {
    swal.fire(res.data.message).catch(err =>console.log(err))
    }
  };
    

  logout = () => {
    axios.delete("/auth/logout/").then(res => {
      this.props.updateUser(null);
      this.props.history.push('/')
      swal.fire(res.data.message)
    })
  }
  render() {
    return (
     
      <div className="logged-in">
       
           {this.props.user ? (
            <div className='user-nav-info'>
                <p>Welcome {this.props.user.user.username} </p>
                <nav>

                </nav>
               <Link to='/profile'><img className='prof-img' src={this.props.user.user.profile_pic} alt='prof-pic'/><button>Profile</button></Link> 
                 
                 <Link to='/dashboard'><button className='nav-btns'>Dashboard</button></Link>
                 <Link to ='/browse'><button>Browse/Search</button></Link>
          <button className="nav-btns" onClick={this.logout}>Logout</button>
    {/* <div className='nav-dropdown'>
      <nav>
        <li>Profile</li>
        <li>Dashboard</li>
        <li>Search</li>
        <li>Logout</li>
        <i onClick="clickMenu()"
        class="fas fa-chevron-circle-down"></i>


      </nav>
      </div> */}
    
          
            </div>

         ) : (
           <div className='login-nav'>
        
          <form className="nav-button-container">
            <input
              onChange={e => this.handleChange(e, "username")}
              type="text"
              placeholder="Username"
            />
            <input
              onChange={e => this.handleChange(e, "password")}
              type="current-password"
              placeholder="Password"
            ></input>

            <button onClick={this.login}>Login</button>
          </form>
          </div>
        )}
      
 </div>

    );
  }
}
function mapStateToProps(reduxState) {
    const {user} = reduxState
    return {user}
}


export default withRouter(connect(
  mapStateToProps,
  { updateUser, logout }
)(Nav));
