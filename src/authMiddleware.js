import { logOut, logIn, logInError, AUTHENTICATE, ANAUTHENTICATE } from './actions';
import { serverLogin } from './api';
 
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
    } else {
        next(action)
    }
}