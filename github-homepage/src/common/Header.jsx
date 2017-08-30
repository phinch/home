import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  Header: {
  },
})
export default class Header extends Component {
  render() {
    return (
      <div className={css(styles.Header)}>
        <h1>Philip Hinch</h1>
        <h2>projects.</h2>
        <hr />
      </div>
    );
  }
}
