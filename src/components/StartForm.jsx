import '../style/StartForm.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { widthAuth } from '../context/AuthContext';
//({onSubmit, formData, onChangeClick}) 

class StartForm extends React.Component {



submitHandle(evt, page) { 
    evt.preventDefault()
    const {email, password, name} = evt.target;
    this.props.logIn(email.value, password.value, name.value);
    this.props.onSubmit(page);
}

render() {
    const {nameField, buttonText, title, footerText, footerLink, passwordLabel, changePopup} = this.props.formData;
    const nameInput = nameField ? <TextField id="name" name="name" label="Как вас зовут" /> : '';
    const forgetPasswortLink = !nameField ? <button className="forget-button">Забыли пароль?</button> : '';

    return (
        <div className="start-form">
          <h2 className="start-form-title">{title}</h2>
          <form noValidate autoComplete="off" onSubmit={(evt)=> this.submitHandle(evt, 'map')}>
              <TextField id="email" name="email" label="Email*" />
              {nameInput}
              <TextField id="password" type="password" name="password" label={passwordLabel} />
              {forgetPasswortLink}
              <Button className="main-btn" type="submit" variant="contained" color="primary">{buttonText}</Button>
          <p className="footer-text">{footerText} <span className="footer-link" onClick={()=> this.props.onChangeClick(changePopup)}>{footerLink}</span></p>
          </form>
      </div>
    );
}
}

export default widthAuth(StartForm);
