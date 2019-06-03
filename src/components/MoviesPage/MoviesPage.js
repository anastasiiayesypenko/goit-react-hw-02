import React, { Component } from 'react';
import styles from './MoviesPage.module.css';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import items from './movies.json';

class MoviesPage extends Component {
  state = {};

  handleInputChange = () => {
    console.log('dvfbgnj');
  };

  render() {
    return (
      <div className={styles.container}>
        <SearchBar value="" onChange={this.handleInputChange} />{' '}
        <MovieGrid items={items} />{' '}
      </div>
    );
  }
}
export default MoviesPage;
