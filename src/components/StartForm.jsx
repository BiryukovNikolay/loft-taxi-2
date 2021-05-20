import '../style/StartForm.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { authenticate } from '../actions';

const startPageData = {
    registration: {
      nameField: true,
      passwordLabel: 'Придумайте пароль*',
      buttonText: 'Зарегистрироваться',
      title: 'Регистрация',
      footerText: 'Уже зарегестрированны?',
      footerLink: 'Войти',
      changePopup: 'login'
    },
  
    login: {
      nameField: false,
      passwordLabel: 'Пароль',
      buttonText: 'Войти',
      title: 'Войти',
      footerText: 'Новый пользователь?',
      footerLink: 'Регистрация',
      changePopup: 'registration'
    }
  }

class StartForm extends React.Component {

    state = { currentPopup: 'login'}

    onChangeClick = (currentPopup) => {
        this.setState({ currentPopup })
    }

    submitHandle(evt, callback) { 
        evt.preventDefault()
        const {email, password, name} = evt.target;
        this.props.authenticate(email.value, password.value, name.value);
        // this.props.onSubmit();
    }

    render() {
        const currentForm = this.state.currentPopup === "login" ? startPageData.login : startPageData.registration;
        const {nameField, buttonText, title, footerText, footerLink, passwordLabel, changePopup} = currentForm;
        const nameInput = nameField ? <TextField id="name" name="name" label="Как вас зовут" /> : '';
        const forgetPasswortLink = !nameField ? <button data-testid='form-name-input' className="forget-button">Забыли пароль?</button> : '';

        return (
            <div className="start-form">
            <h2 className="start-form-title" data-testid='form-title'>{title}</h2>
            <form data-testid='start-form' noValidate autoComplete="off" onSubmit={(evt)=> this.submitHandle(evt)}>
                <TextField id="email" name="email" label="Email*" />
                {nameInput}
                <TextField id="password" type="password" name="password" label={passwordLabel} />
                {forgetPasswortLink}
                <Button className="main-btn" type="submit" variant="contained" color="primary" data-testid='form-submit'>{buttonText}</Button>
            </form>
            <p className="footer-text">
                {footerText } 
                <span 
                   data-testid='form-change-button' 
                   className="footer-link" 
                   onClick={()=> this.onChangeClick(changePopup)}
                >
                    { footerLink}
                </span>
            </p>
        </div>
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
  )(StartForm);

StartForm.propTypes = {
    logIn: PropTypes.func,
}
