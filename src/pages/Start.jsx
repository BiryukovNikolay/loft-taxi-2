import '../style/Start.css';
import React from 'react';
import StartLogo from '../components/Startlogo';
import { widthAuth } from '../context/AuthContext';
import StartForm from '../components/StartForm';
import PropTypes from "prop-types";

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

class Start extends React.Component {  

    state = { currentPopup: 'login'}

    onChangeClick = (currentPopup) => {
      this.setState({ currentPopup })
    }
  
    render() {
      return <div className="start-page">
          <section className="start-logo-section" >
            <StartLogo />
          </section>
          <section className="reg-login-section">
              {this.state.currentPopup === "login" && <StartForm onChangeClick={this.onChangeClick}  onSubmit={this.props.onSubmit} {...{formData: startPageData.login}} />}
              {this.state.currentPopup === "registration" && <StartForm onChangeClick={this.onChangeClick}  onSubmit={this.props.onSubmit} {...{formData: startPageData.registration}} />}
          </section>
        </div>
    };
}
  
  
export default widthAuth(Start);

Start.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
