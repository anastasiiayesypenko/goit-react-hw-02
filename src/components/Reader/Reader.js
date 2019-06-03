import React from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import styles from './Reader.module.css';

class Reader extends React.Component {
  state = {
    index: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  changePage = step => {
    const { index } = this.state;
    this.setState({
      index: index + step,
    });
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Publication item={items[index]} />{' '}
        <Counter items={items} index={index} />{' '}
        <Controls onClick={this.changePage} index={index} />{' '}
      </div>
    );
  }
}
export default Reader;
