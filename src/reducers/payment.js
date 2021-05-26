import { SAVE_CARD } from '../actions/paymentActions';

const initialState = {
    paymentCard: {
        name: '',
        cardNumber: '',
        date: '',
        CVC: ''
    }
}
 
export default function(state = initialState, action) {
    switch(action.type) {
        case SAVE_CARD: {
            const {cardNumber, cvc, expiryDate, cardName} = action.payload;
            return {...state, paymentCard: {cardNumber, cvc, expiryDate, cardName}}
        }
        default: {
            return state
        }
    }
}
