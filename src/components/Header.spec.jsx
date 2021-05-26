import React from 'react';
import Header from './Header';
import {render, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const mockFuncGoToPage = jest.fn();
const mockFuncLogOut = jest.fn();

jest.mock('./map', () => ({Map: () => <div>Map content</div>}));
jest.mock('./profile', () => ({Profile: () => <div>Profile content</div>}));


describe('Header', () => {
    const mockStore = {
        getState: () => {},
        subscribe: () => {},
        dispatch:() => {},
    }

    const history = createMemoryHistory()

    it('renders correctly', () => {

        const {container} = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <Header />
                </Provider>
            </Router>
        )
        expect(container.innerHTML).toMatch('Карта')
    })

    describe('when click on nav buttons', () => {
        it('open the corresponding page', () => {

            const { getByText, container } = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <Header />
                </Provider>
            </Router>
            )

            fireEvent.click(getByText('Карта'))
            expect(container.innerHTML).toMatch('Map content');
            fireEvent.click(getByText('Профиль'))
            expect(container.innerHTML).toMatch('Profile content');
    
            fireEvent.click(getByText('Выйти'))
            expect(mockFuncLogOut).toHaveBeenCalledTimes(1);
            expect(mockFuncGoToPage).toHaveBeenCalledWith('start');
        })
    })
})
