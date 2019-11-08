import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { connect } from "react-redux";
import store, { updateUser, logout } from "../../ducks/store";
import { withRouter, Link } from "react-router-dom";
import "./Nav.css";
import menu from "../../Assets/icons8-menu-64.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      username: reduxState.username,
      password: reduxState.password,
      menu: false
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        username: reduxState.username,
        password: reduxState.password
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  openMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  login = async () => {
    const { username, password } = this.state;
    const res = await axios.post("/auth/login", { username, password });
    if (res.data.user) {
      this.props.updateUser(res.data.user);
      this.props.history.push("/dashboard");
      this.setState({
        password: ""
      });
      swal.fire(res.data.message);
    } else {
      swal.fire(res.data.message).catch(err => console.log(err));
    }
  };

  logout = () => {
    axios.delete("/auth/logout/").then(res => {
      this.props.updateUser(null);
      this.props.history.push("/");
      swal.fire(res.data.message);
    });
  };

  removeMenu =() => {
    const dropdown = document.getElementById('dropdown')
    if (!dropdown.className.contains('hide')) {
      dropdown.className.add('hide')
    }
  }

  render() {
    return (
      
      <div className="logged-in">
        {this.props.user ? (
          <div className="user-nav-info">
             <h1>Prep, Share, Eat</h1>
            

            <Link to="/profile">
              <img
                className="prof-img"
                src={this.props.user.profile_pic}
                alt="prof-pic"
              />

              <button className="nav-btns">Profile</button>
            </Link>

            <Link to="/dashboard">
              <button className="nav-btns">Dashboard</button>
            </Link>
            <Link to="/browse">
              <button className="nav-btns">Browse/Search</button>
            </Link>
            <button className="nav-btns" onClick={this.logout}>
              Logout
            </button>
            <div id ='dropdown' className ='dropdown hide' onClick ={this.openMenu}>
            <img src={menu} alt="menu-img" className='menu-icon' />
            </div>
              <div className ='menu'>
            <ul className={this.state.menu ? 'menu slide'
                :
                'menu'} >
              
                    <li > Profile </li>
                    <li> Dashboard </li>
                    <li> Browse </li>
                    <li> Logout </li>            
                </ul>
                </div>

          </div>

          
        ) : (
          
          <div className="login-nav">
             <h1>Prep, Share, Eat</h1>
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
  const { user } = reduxState;
  return { user };
}

export default withRouter(
  connect(
    mapStateToProps,
    { updateUser, logout }
  )(Nav)
);

