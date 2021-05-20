import './style/App.css';
import React from 'react';
import Map from './pages/Map.jsx';
import Profile from './pages/Profile.jsx';
import Start from './pages/Start';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {  

  render() {
    return <div className="App">
      {this.props.isLoggedIn ?  <Profile /> :  <Start />}
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route path='/map' component={Map}/>
        <Route path='/profile' component={Profile}/>
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
