import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const StartRoute = connect((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
}))(({ component: Component, startComponent: StartComponent, isLoggedIn, ...rest }) => (
    <Route
      {...rest}
      render={(props) => isLoggedIn ? <Component {...props} /> : <StartComponent {...props}/>}
    />
));
