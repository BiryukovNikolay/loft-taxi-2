import { logOut, logIn, logInError, savepaymentcard, AUTHENTICATE, ANAUTHENTICATE, SAVE_PAYMENTCARD } from './actions';
import { serverLogin, serverSaveCard } from './api';
 
export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const data = await serverLogin(email, password);
        if (data.success) {
            localStorage.setItem('token', data.token)
            store.dispatch(logIn(data.token));
        } else {
            store.dispatch(logInError(data.error));
        }
    } else if (action.type === ANAUTHENTICATE) {
        localStorage.removeItem('token')
        store.dispatch(logOut())
    } else if (action.type === SAVE_PAYMENTCARD) {
        const cardData = action.payload;
        const isSave = await serverSaveCard(cardData);
        if (isSave) {
            store.dispatch(savepaymentcard())
        }
    } else {
        next(action)
    }
}