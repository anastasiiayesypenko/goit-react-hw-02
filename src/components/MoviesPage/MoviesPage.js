import React, { Component } from 'react';
import styles from './MoviesPage.module.css';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import items from './movies.json';

const filterMovies = (movies, query) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );
};
class MoviesPage extends Component {
  state = {
    value: '',
    movies: items,
  };

  handleInputChange = inputValue => {
    this.setState({
      value: inputValue,
    });
  };

  render() {
    const { value, movies } = this.state;
    const filtered = filterMovies(movies, value);
    return (
      <div className={styles.container}>
        <SearchBar value={value} onChange={this.handleInputChange} />{' '}
        <MovieGrid items={filtered} />{' '}
      </div>
    );
  }
}
export default MoviesPage;
