import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logOut } from '../actions';
import Logo from './Logo';
import { widthAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { store } from '../store';

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
              <Button><Link to="/map">Карта</Link></Button>
              <Button><Link to="/profile">Профиль</Link></Button>
              <Button><Link onClick={() => store.dispatch(logOut())} to="/start">Выйти</Link></Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default widthAuth(Header);
