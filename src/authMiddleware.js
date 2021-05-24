import { logOut, 
         logIn, 
         logInError, 
         savecard,
         errorsavepaymentcard,
         AUTHENTICATE, 
         ANAUTHENTICATE, 
         SAVE_PAYMENTCARD,
    } from './actions';
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
        console.log('cardData', cardData);
        const isSave = await serverSaveCard(cardData);
        if (isSave.success) {
            console.log(cardData);
            store.dispatch(savecard(cardData))
        } else {
            store.dispatch(errorsavepaymentcard())
        }
    } else {
        next(action)
    }
}