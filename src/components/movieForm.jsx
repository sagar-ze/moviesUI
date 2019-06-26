import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";


class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);

    this.props.history.push("/movies");
  };

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
 
export default MovieForm;