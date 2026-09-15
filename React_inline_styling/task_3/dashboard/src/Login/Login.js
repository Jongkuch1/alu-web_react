import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label className={css(styles.label)} htmlFor="email">
        Email
      </label>
      <input className={css(styles.input)} type="email" id="email" name="email" />
      <label className={css(styles.label)} htmlFor="password">
        Password
      </label>
      <input
        className={css(styles.input)}
        type="password"
        id="password"
        name="password"
      />
      <button className={css(styles.button)} type="button">
        OK
      </button>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  label: {
    marginRight: '10px',
    '@media (max-width: 900px)': {
      display: 'block',
      marginRight: 0,
    },
  },
  input: {
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
    },
  },
  button: {
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
    },
  },
});

export default Login;
