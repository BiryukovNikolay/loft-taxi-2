import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logOut } from '../actions/authActions';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

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
                <Button><Link onClick={() => this.props.logOut()} to="/">Выйти</Link></Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(
  null,
  { logOut }
)(Header);
