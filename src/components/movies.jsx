import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
class Movies extends Component {
	state = {
		movies: getMovies(),
		currentPage: 1,
		pageSize: 4
	};
	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({ movies: movies });
	};

	handleLiked = (movie) => {
		const movies = [...this.state.movies]
		const index = movies.indexOf(movie)
		movies[index] = { ...movies[index] }
		movies[index].liked = !movies[index].liked
		this.setState({ movies })
	}

	handlePageChange = page => {
		this.setState({ currentPage: page })
	}
	render() {
		const { length: movieCount } = this.state.movies;
		const { currentPage, pageSize, movies: allMovies } = this.state;
		if (movieCount === 0)
			return <p>There is no movie available in the database</p>;
		const movies = paginate(allMovies, currentPage, pageSize)
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
							{movies.map(movie => (
								<tr key={movie._id}>
									<td>{movie.title}</td>
									<td>{movie.genre.name}</td>
									<td>{movie.numberInStock}</td>
									<td>{movie.dailyRentalRate}</td>
									<td>
										<Like liked={movie.liked} onClick={() => this.handleLiked(movie)} />
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
				<Pagination
					pageSize={this.state.pageSize}
					currentPage={this.state.currentPage}
					itemCount={movieCount}
					onPageChange={this.handlePageChange} />
			</React.Fragment>
		);
	}
}

export default Movies;
