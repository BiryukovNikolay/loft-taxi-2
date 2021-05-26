import {
    savecard,
    errorsavepaymentcard,
    SAVE_PAYMENTCARD,
    GET_PAYMENTCARD,
} from '../actions/paymentActions';
import { serverSaveCard, getPaymentCard } from '../api';

export const paymentMiddleware = (store) => (next) => async (action) => {
    if (action.type === SAVE_PAYMENTCARD) {
        const cardData = action.payload;
        const isSave = await serverSaveCard(cardData);
        if (isSave.success) {
            store.dispatch(savecard(cardData))
        } else {
            store.dispatch(errorsavepaymentcard())
        }
    } else if (action.type === GET_PAYMENTCARD) {
        const token = action.payload;
        const paymentCard = await getPaymentCard(token);
        store.dispatch(savecard(paymentCard));
    } else {
    next(action)
    }
}