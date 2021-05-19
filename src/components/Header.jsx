import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import PropTypes from "prop-types";
import { widthAuth } from '../context/AuthContext';

class Header extends React.Component {

  headerLogout = () => {
    this.props.logOut();
    this.props.goToPage('start');
  }

  render () {
    return (
      <div >
        <AppBar position="static">
          <Toolbar className="header">
            <Typography variant="h6" >
              <Logo />
            </Typography>
            <div>
              <Button color="inherit" onClick = {()=> this.props.goToPage('map')} > Карта </Button>
              <Button color="inherit" onClick = {()=> this.props.goToPage('profile')}> Профиль </Button>
              <Button color="inherit" onClick = {this.headerLogout}> Выйти </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  goToPage: PropTypes.func.isRequired,
  logOut: PropTypes.func,
}

export default widthAuth(Header);
