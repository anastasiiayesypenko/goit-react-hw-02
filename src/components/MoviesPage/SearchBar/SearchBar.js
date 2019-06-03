import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = {};

  render() {
    return <input type="text" value="" className={styles.input} />;
  }
}

export default SearchBar;
