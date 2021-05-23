import { SAVE_PAYMENTCARD } from '../actions';

const initialState = {
    paymentCard: {
        name: '',
        cardNumber: '',
        date: '',
        cvc: ''
    }
}
 
export default function(state = initialState, action) {
    switch(action.type) {
        case SAVE_PAYMENTCARD: {
            return {...state, paymentCard: action.payload}
        }
        default: {
            return state
        }
    }
}
