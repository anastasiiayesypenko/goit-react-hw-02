import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ title, poster, overview }) => (
  <div className={styles.movieCard}>
    <img src={poster} alt="" />
    <div className={styles.content}>
      <h2> {title} </h2> <p> {overview}</p>{' '}
    </div>{' '}
  </div>
);
MovieGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};
export default MovieGridItem;
