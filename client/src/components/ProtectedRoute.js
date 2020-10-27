import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { useContext } from 'react';

import AuthContext from '../contexts/AuthContexts';

const PrivateRoute = ({ component: Component, ...rest }) => {

const contextType = AuthContext;
  const auth = useContext(contextType);

  const getAuth = (auth) => {

    let loggedIn;

    if (auth === null) {
      return;
    } else if (auth.data) {
        loggedIn = true;
    } else if (!auth.data) {
        loggedIn = false;
    }

    return loggedIn;
  }

  const isLoggedIn = getAuth(auth);

  if (isLoggedIn === undefined) {return <></>}


  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component user={auth} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute