import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from './common/like';

class Movies extends Component {
	state = {
		movies: getMovies()
	};
	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({ movies: movies });
	};
	render() {
		const { length: movieCount } = this.state.movies;
		if (movieCount === 0)
			return <p>There is no movie available in the database</p>;
		return (
			<React.Fragment>
				<h3>There are altogether {movieCount} movies in the list</h3>
				<h6>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Title</th>
								<th scope="col">Genre</th>
								<th scope="col">Stock</th>
								<th scope="col">Rate</th>
								<th />
								<th />
							</tr>
						</thead>
						<tbody>
							{this.state.movies.map(movie => (
								<tr key={movie._id}>
									<td>{movie.title}</td>
									<td>{movie.genre.name}</td>
									<td>{movie.numberInStock}</td>
									<td>{movie.dailyRentalRate}</td>
									<td>
										<Like />
									</td>
									<td>
										<button
											className="btn btn-primary"
											onClick={() => this.handleDelete(movie)}>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</h6>
			</React.Fragment>
		);
	}
}

export default Movies;
