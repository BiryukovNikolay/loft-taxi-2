import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from './logo'

export default function Header({ goToPage }) {
    const handlePage = (page) => {
        goToPage(page)
    }

  return (
    <div >
      <AppBar position="static">
        <Toolbar className="header">
          <Typography variant="h6" >
            <Logo />
          </Typography>
          <div>
            <Button color="inherit" onClick = {()=>handlePage('map')} > Карта </Button>
            <Button color="inherit" onClick = {()=>handlePage('profile')}> Профиль </Button>
            <Button color="inherit" onClick = {()=>handlePage('registration')}> Войти </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}