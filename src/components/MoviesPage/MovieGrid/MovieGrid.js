import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieGridItem from './MovieGridItem/MovieGridItem';

const MovieGrid = ({ items }) =>
  items.length > 0 ? (
    <div className={styles.movieGrid}>
      {' '}
      {items.map(item => (
        <MovieGridItem
          key={item.id}
          title={item.title}
          poster={item.posterUrl}
          overview={item.overview}
        />
      ))}{' '}
    </div>
  ) : (
    <div className={styles.noResults}> No matching results! </div>
  );
MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default MovieGrid;
