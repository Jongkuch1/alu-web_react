import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label className={css(styles.label)} htmlFor="email">
        Email
      </label>
      <input type="email" id="email" name="email" />
      <label className={css(styles.label)} htmlFor="password">
        Password
      </label>
      <input type="password" id="password" name="password" />
      <button type="button">OK</button>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  label: {
    marginRight: '10px',
  },
});

export default Login;
