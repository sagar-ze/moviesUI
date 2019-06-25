import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getGenres, genres } from '../services/fakeGenreService';
import { getMovies, saveMovie } from '../services/fakeMovieService';


class NewMovie extends Form {
  state = {
    data: {
      title: "",
      genreId:"",
      numberInStock:"",
      dailyRentalRate:""
    },
    genres:[],
    errors:{}
  }
  schema = {
    _id:Joi.string(),
    title: Joi.string().min(1).required().label("Title"),
    genreId: Joi.string().required().label("genreId"),
    numberInStock: Joi.number().min(0).max(100).required().label("Number In Stock"),
    dailyRentalRate:Joi.number().min(0).max(10).required().label("Daily Rental Rate")
  }

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId == "new") return;

    const movie = getMovies(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewNodel(movie) });
    
  }
  mapToViewNodel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre,
      numberInStock: movie.numberInStock,
      dailyRentalRate:movie.dailyRentalRate
      
    }
  }
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push('/movies')
}

  render() { 
   
    const { data, errors} = this.state;
    
    return (
   
 
      <div>
        <h1>Add new Movie</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group" >
            <label htmlFor="title">Title</label>
            <input 
             
              value={data.title}
              onChange={this.handleChange}
              name="title"
              id="title"
              type="text"
              autoFocus
              className="form-control"
            /> 
                {errors.title &&<div className="div alert alert-danger">{errors.title}</div>}
          </div>
          <div className="form-group" >
            <label htmlFor="genreId">Genre</label>
            <select 
              value={data.genreId}
              onChange={this.handleChange}
              name="genreId"
              id="genreId"
              className="form-control"
            >
              {this.state.genres.map(genre => (
                <option key={genre._id}>{genre.name}</option>
              ))}</select> 
              
          </div>
          <div className="form-group" >
            <label htmlFor="dailyRentalRate">Rate</label>
            <input 
             
              value={data.dailyRentalRate}
              onChange={this.handleChange}
              name="dailyRentalRate"
              id="dailyRentalRate"
              type="text"
              
              className="form-control"
            /> 
                {errors.dailyRentalRate &&<div className="div alert alert-danger">{errors.dailyRentalRate}</div>}
          </div>
          <div className="form-group" >
            <label htmlFor="numberInStock">NumberInstock</label>
            <input 
             
              value={data.numberInStock}
              onChange={this.handleChange}
              name="numberInStock"
              id="numberInStock"
              type="text"
           
              className="form-control"
            /> 
                {errors.numberInStock &&<div className="div alert alert-danger">{errors.numberInStock}</div>}
          </div>
        
      {this.renderButton("Add")}
       
         </form>
       </div>
      
    );
  }
}
 
export default NewMovie;