import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Login({onSubmit}) {

const submitHandle = (evt, page) => {
    evt.preventDefault()
    onSubmit(page)
}

  return (
      <div className="login-form">
        <form noValidate autoComplete="off" onSubmit={(evt)=>submitHandle(evt, 'map')}>
            <TextField id="email" label="Email*" />
            <TextField id="password" label="Введите пароль" />
            <Button className="main-btn" type="submit" variant="contained" color="primary">Войти</Button>
        </form>
    </div>
  );
}
