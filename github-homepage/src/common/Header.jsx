import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  title: {
    marginBottom: 0,
  },
  subtitle: {
    marginTop: 5,
  }
})

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className={css(styles.title)}>Philip Hinch</h1>
        <h2 className={css(styles.subtitle)}>projects.</h2>
        <hr />
      </div>
    );
  }
}
