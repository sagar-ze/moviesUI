import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import * as userService from '../services/userService'


class RegisterForm extends Form {
  state = { 
    data: { username:"", password:"", name: "" },
    errors:{}
  }
  schema = {
    username:Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name:Joi.string().required()
  }
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      localStorage.setItem('token', response.headers['x-auth-token']);
      this.props.history.push('/');
    }
    catch (ex) {
      if (ex.response && ex.response.status === 400)
      {
        const errors = { ...this.state.errors }
        errors.username = ex.response.data;
        this.setState({errors});
        
        }
     
    }

}
  render() { 
    const { data, errors } = this.state;
    return ( 
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label htmlFor="username">Username</label>
            <input 
             
              value={data.username}
              onChange={this.handleChange}
              name="username"
              id="username"
             type="text"
              autoFocus
              className="form-control"
            /> 
                {errors.username &&<div className="div alert alert-danger">{errors.username}</div>}
          </div>
          <div className="form-group" >
            <label htmlFor="username">Password</label>
            <input  
            value={data.password}  
              onChange={this.handleChange}
              name="password" 
              id="password"
              type="password"
              className="form-control"
            /> 
                {errors.password &&<div className="div alert alert-danger">{errors.password}</div>}
          </div>
          <div className="form-group" >
            <label htmlFor="name">Name</label>
            <input
              value={data.name}
              onChange={this.handleChange}
              name="name"
              id="name"
              type="text"
              className="form-control"
            />     {errors.name &&<div className="div alert alert-danger">{errors.name}</div>}
          </div>
         {this.renderButton("Register")}
        </form>
      </div>
     );
  }
}
 
export default RegisterForm;