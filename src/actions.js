export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const AUTHENTICATE = 'AUTHENTICATE';
export const ANAUTHENTICATE = 'ANAUTHENTICATE';
export const SAVE_PAYMENTCARD = 'SAVE_PAYMENTCARD';

export const logIn = (token) => ({type: LOG_IN, payload: token})
export const logOut = () => ({type: LOG_OUT})
export const logInError = (error) => ({type: LOG_IN_ERROR, payload: error})
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}})
export const anauthenticate = () => ({type: ANAUTHENTICATE})
export const savepaymentcard = (cardNumber, CVC, date, name) => ({type: SAVE_PAYMENTCARD, payload: {cardNumber, CVC, date, name}})
