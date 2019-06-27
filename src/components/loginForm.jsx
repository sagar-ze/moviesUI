import React, { Component } from 'react';

import Joi from 'joi-browser';
import Form from './common/form';
import auth,{login} from '../services/authService'
import { Redirect } from 'react-router-dom';
  class LoginForm extends Form {
    state = {
      data: { username: "", password: "" },
      errors: {}
    };
  
    schema = {
      username: Joi.string()
        .required()
        .label("Username"),
      password: Joi.string()
        .required()
        .label("Password")
    };
  
    doSubmit = async () => {
      try {
        const { data } = this.state;
        await login(data.username, data.password);
        const { state } = this.props.location;
        window.location = state ? state.from.pathname: '/';
       
        
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          const errors = { ...this.state.errors }
          errors.username = ex.response.data;
          this.setState({errors})
        }
        
      }
  };

  render() { 
    const { data, errors } = this.state;
    if(auth.getCurrentUser()) return <Redirect to="/" />
    return (<div >
      <h1>
        Login
      </h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group" ><label htmlFor="username" style={{ cursor:"pointer"}}>Username</label>
          <input
            autoFocus
            value={data.username}
            onChange={this.handleChange}  
            name="username"
            id="username"
            type="text"
            className="form-control"
         
          />
          {errors.username &&<div className="div alert alert-danger">{errors.username}</div>}
        </div>
        <div className="form-group"><label htmlFor="password" style={{ cursor: "pointer" }}>Password</label>
          <input
            value={data.password}
            onChange={this.handleChange}
            name="password"
            id="password"
            type="password"
            className="form-control"
          />
          {errors.password && <div className="alert alert-danger">{errors.password}</div>}
        </div>
        {this.renderButton("Login")}
      </form>
    </div> );
  }
}
 
export default LoginForm;