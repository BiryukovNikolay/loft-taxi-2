import { authMiddleware } from './authMiddleware';
import { authenticate } from '../actions/paymentActions';
import { serverLogin } from '../api';

jest.mock('./api', () => ({serverLogin: jest.fn(() => ({'success': true}))}))

describe('authMiddleware', ()=> {
    describe("#AUTHENTICATE", () => {
        it('authenticate throght api', async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                authenticate('testLogin', 'testPassword')
            )

            expect(serverLogin).toBeCalledWith('testLogin', 'testPassword')
            expect(dispatch).toBeCalledWith(
                { type: 'LOG_IN'}
            )
        })
    })
})
