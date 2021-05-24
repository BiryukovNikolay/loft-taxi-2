import { SAVE_CARD } from '../actions';

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
            const {cardNumber, CVC, date, name} = action.payload;
            return {...state, paymentCard: {cardNumber, CVC, date, name}}
        }
        default: {
            return state
        }
    }
}
