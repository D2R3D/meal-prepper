import React, { Component } from "react";
import axios from "axios";
import store, { updateUser } from "../../ducks/store";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert2";
import './Auth.css'


class Auth extends Component {
  constructor(props) {
    super(props);
    const reduxState =store.getState()
    this.state = {
      username: reduxState.username,
      email: reduxState.email,
      password: reduxState.password
    };
  }
  componentDidMount() {
    this.unsubscribe =store.subscribe(() => {
      const reduxState = store.getState() 
      this.setState({username: reduxState.username,
      email: reduxState.email, password: reduxState.password})
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
      <div className ='auth-box'>
        <form className="register-box">
          <input
            type='text'
            placeholder="Username"
            onChange={e => this.handleChange(e, "username")}
          ></input>
          <input
            type ='email'
            placeholder="Email"
            onChange={e => this.handleChange(e, "email")}
          ></input>
          <input
            type ='password'
            placeholder="Password"
            onChange={e => this.handleChange(e, "password")}
          ></input>
          <div>
     <button onClick={this.register}> Register </button>
        </div>
        </form>

        <div>
      
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
    const {user} = reduxState
    return {user}
}

  export default withRouter(connect(mapStateToProps,
    { updateUser}
  )(Auth));