import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieGridItem from './MovieGridItem/MovieGridItem';

const MovieGrid = ({ items }) => (
  <div className={styles.movieGrid}>
    {' '}
    {items.map()}{' '}
    <MovieGridItem
      id={items.id}
      title={items.title}
      poster={items.posterUrl}
      overview={items.overview}
    />{' '}
  </div>
);
MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default MovieGrid;
