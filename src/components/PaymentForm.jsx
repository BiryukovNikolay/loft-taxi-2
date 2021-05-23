import '../style/PaymentForm.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardLogo from './CardLogo';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { authenticate } from '../actions';

class PaymentForm extends React.Component {

    state = { currentPopup: 'login'}

    onChangeClick = (currentPopup) => {
        this.setState({ currentPopup })
    }

    submitHandle(evt, callback) { 
        evt.preventDefault()
        const {email, password, name} = evt.target;
        this.props.authenticate(email.value, password.value, name.value);
    }

    render() {

        return (
            <div className="payment-form">
            <h2 className="start-form-title" data-testid='form-title'>Профиль</h2>
               {<span className="payment-form-description">Ввдеите платежные данные</span>}
               {this.props.error && <span className="error-form">{this.props.error}</span>}

                <form data-testid='start-form' noValidate autoComplete="off" onSubmit={(evt)=> this.submitHandle(evt)}>
                    <div className="payment-form__main">
                        <div className="payment-form__inputs">
                            <div className="payment-form__top-wrapper">
                                <TextField id="name" name="name" label="Имя владельца" />
                                <TextField id="number" name="number" label="Номер Карты" />
                            </div>
                            <div className="payment-form__bottom-wrapper">
                                <TextField className="payment-form__data-input" id="date" name="date" label="MM/YY" />
                                <TextField id="CVC" name="CVC" label="CVC" />
                            </div>
                        </div>
                        <div className="payment-form__card">
                            <div className="card-image">
                                <div className="card-image__header">
                                   <CardLogo />
                                   <div className="card-image__date">
                                        <span className="card-image__date-month">07</span>
                                            <span className="card-image__slash">/</span>
                                        <span className="card-image__date-year">26</span>
                                    </div>
                                </div>
                                <div className="card-image__number">
                                    <span className="card-image__number-value">0000 0000 0000 0000</span>
                                </div>
                                <div className="card-image__footer">
                                    <div className="card-image-chip">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={27} viewBox="0 0 30 27" fill="none">
                                            <path d="M11.5 26.5H17.5V4.5H29C29.1667 3.33333 28.5 0.8 24.5 0H11.5V26.5Z" fill="#E1E1E1" />
                                            <path d="M3 0H9V4.5H0C0 3.33333 0.6 0.8 3 0Z" fill="#E1E1E1" />
                                            <path d="M3 26H9V21.5H0C0 22.6667 0.6 25.2 3 26Z" fill="#E1E1E1" />
                                            <path d="M26 26H20V21.5H29C29 22.6667 28.4 25.2 26 26Z" fill="#E1E1E1" />
                                            <path d="M0 6.5H9V11.5H0V6.5Z" fill="#E1E1E1" />
                                            <path d="M20 6.5H29V11.5H20V6.5Z" fill="#E1E1E1" />
                                            <path d="M0 13.5H9V18.5H0V13.5Z" fill="#E1E1E1" />
                                            <path d="M20 13.5H29V18.5H20V13.5Z" fill="#E1E1E1" />
                                        </svg>
                                    </div>
                                    <div className="card-image-master">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                                            <g style={{mixBlendMode: 'multiply'}}>
                                            <circle cx={14} cy={14} r={14} fill="#F1F1F1" />
                                            </g>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                                            <g style={{mixBlendMode: 'multiply'}}>
                                            <circle cx={14} cy={14} r={14} fill="#F1F1F1" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-form__footer">
                       <Button className="main-btn" type="submit" variant="contained" color="primary" data-testid='form-submit'>Сохранить</Button>
                    </div>
                </form>

        </div>
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn, error: state.auth.error}),
    { authenticate }
  )(PaymentForm);

PaymentForm.propTypes = {
    logIn: PropTypes.func,
}
