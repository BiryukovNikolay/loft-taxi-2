import React from 'react';
import Header from './Header';
import {render, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const mockFuncGoToPage = jest.fn();
const mockFuncLogOut = jest.fn();

describe('Header', () => {
    it('renders correctly', () => {
       /* const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot()*/
        const mockStore = {
            getState: () => {},
            subscribe: () => {},
            dispatch:() => {},
        }

        const history = createMemoryHistory()

        const {container} = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <Header />
                </Provider>
            </Router>
        )
        expect(container.innerHTML).toMatch('Header')
    })

    describe('when click on nav buttons', () => {
        it('open the corresponding page', () => {

            const { getByText } = render(<Header goToPage={mockFuncGoToPage} logOut={mockFuncLogOut} />)

            fireEvent.click(getByText('Карта'))
            expect(mockFuncGoToPage).toHaveBeenCalledWith('map');
            fireEvent.click(getByText('Профиль'))
            expect(mockFuncGoToPage).toHaveBeenCalledWith('profile');
    
            fireEvent.click(getByText('Выйти'))
            expect(mockFuncLogOut).toHaveBeenCalledTimes(1);
            expect(mockFuncGoToPage).toHaveBeenCalledWith('start');
            ;
        })
    })
})
