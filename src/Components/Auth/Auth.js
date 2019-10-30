import React, { Component } from "react";
import axios from "axios";
import { updateUser } from "../../ducks/reducer";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert2";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: '',
      password: ""
    };
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  register = async () => {
    const { username, email, password } = this.state;
    const profile_pic = `https://robohash.org/${username}`;
    const res = await axios.post("/auth/register", {
      username,
      email,
      password,
      profile_pic
    });
    this.props.updateUser(res.data.user);
    this.props.history.push("/dashboard");
    swal.fire({ type: "success", text: `Welcome ${username}` });
  };

 
  render() {
    return (
      <div>
        <form className="register box">
          <input
            value={this.state.username}
            placeholder="Username"
            onChange={e => this.handleChange(e, "username")}
          ></input>
          <input
            value={this.state.email}
            placeholder="Email"
            onChange={e => this.handleChange(e, "email")}
          ></input>
          <input
            value={this.state.password}
            placeholder="Password"
            type='current-password'
            onChange={e => this.handleChange(e, "password")}
          ></input>
       <Link to ='/dashboard'><button onClick={this.register}> Register </button></Link> 
        </form>

        <div>
      
        </div>
      </div>
    );
  }
}


  
  export default withRouter(connect(null,
    { updateUser}
  )(Auth));