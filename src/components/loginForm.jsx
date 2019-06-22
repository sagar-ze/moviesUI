import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

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
  
    doSubmit = () => {
      // Call the server
      console.log("Submitted");
    };

  render() { 
    const { data,errors } = this.state;
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
            type="text"
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