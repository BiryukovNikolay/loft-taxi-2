import './style/App.css';
import React from 'react';
import Map from './pages/Map.jsx';
import Profile from './pages/Profile.jsx';
import Start from './pages/Start';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { StartRoute } from './StartRoute';

class App extends React.Component {  

  render() {
    return <div className="App">
      <Switch>
        <StartRoute exact path='/' component={Map} startComponent={Start}/>
        <PrivateRoute path='/map' component={Map}/>
        <PrivateRoute path='/profile' component={Profile}/>
      </Switch>
    </div>
  };
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);

Start.propTypes = {
  isLoggedIn: PropTypes.bool
}
