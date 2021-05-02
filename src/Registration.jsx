import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Registration({onSubmit}) {

const submitHandle = (evt, page) => {
    evt.preventDefault()
    onSubmit(page)
}

  return (
      <div className="login-form">
        <form noValidate autoComplete="off" onSubmit={(evt)=>submitHandle(evt, 'map')}>
            <TextField id="email" label="Email*" />
            <TextField id="name" label="Как вас зовут" />
            <TextField id="password" label="Придумайте пароль" />
            <Button className="main-btn" type="submit" variant="contained" color="primary">Зарегестрироваться</Button>
        </form>
    </div>
  );
}