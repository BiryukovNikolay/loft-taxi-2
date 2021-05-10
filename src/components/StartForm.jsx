import '../style/StartForm.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function StartForm({onSubmit, formData, onChangeClick}) {

const {nameField, buttonText, title, footerText, footerLink, passwordLabel, changePopup} = formData;
const nameInput = nameField ? <TextField id="name" label="Как вас зовут" /> : '';
const forgetPasswortLink = !nameField ? <button className="forget-button">Забыли пароль?</button> : '';

const submitHandle = (evt, page) => {
    evt.preventDefault()
    onSubmit(page)
}

  return (
      <div className="start-form">
        <h2 className="start-form-title">{title}</h2>
        <form noValidate autoComplete="off" onSubmit={(evt)=>submitHandle(evt, 'map')}>
            <TextField id="email" label="Email*" />
            {nameInput}
            <TextField id="password" label={passwordLabel} />
            {forgetPasswortLink}
            <Button className="main-btn" type="submit" variant="contained" color="primary">{buttonText}</Button>
        <p className="footer-text">{footerText} <span className="footer-link" onClick={()=>onChangeClick(changePopup)}>{footerLink}</span></p>
        </form>
    </div>
  );
}
