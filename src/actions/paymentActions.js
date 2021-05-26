export const SAVE_PAYMENTCARD = 'SAVE_PAYMENTCARD';
export const GET_PAYMENTCARD = 'GET_PAYMENTCARD';
export const ERROR_SAVE_PAYMENTCARD = 'ERROR_SAVE_PAYMENTCARD';
export const SAVE_CARD = 'SAVE_CARD';

export const savepaymentcard = (cardNumber, cvc, expiryDate, cardName, token) => ({type: SAVE_PAYMENTCARD, payload: {cardNumber, cvc, expiryDate, cardName, token}})
export const savecard = ({cardNumber, cvc, expiryDate, cardName}) => ({type: SAVE_CARD, payload: {cardNumber, cvc, expiryDate, cardName}});
export const errorsavepaymentcard = () => ({type: ERROR_SAVE_PAYMENTCARD});
export const getpaymentcard = (token) => ({type: GET_PAYMENTCARD, payload: token});
