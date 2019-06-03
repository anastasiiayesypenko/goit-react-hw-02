import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = {};

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <input
        type="text"
        value={value}
        className={styles.input}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
