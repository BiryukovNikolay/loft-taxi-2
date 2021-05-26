import React from 'react';
import StartForm from './StartForm';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('StartForm', () => {
    const mockFunc = jest.fn()

    it('changes form after click', () => {

        const mockStore = {
            getState: () => ({auth: {isLoggedIn: true}}),
            subscribe: () => {},
            dispatch: () => {}
        }

        const { getByTestId, queryByTestId } = render(
        <Provider store={mockStore}>
            <StartForm />
        </Provider>)

        expect(getByTestId('form-title').textContent).toBe('Войти');
        expect(queryByTestId('form-name-input')).toBeTruthy();
        
        fireEvent.click(getByTestId('form-change-button'));
        expect(getByTestId('form-title').textContent).toBe('Регистрация');
        expect(queryByTestId('form-name-input')).toBeNull();
        
        fireEvent.click(getByTestId('form-change-button'));
        expect(getByTestId('form-title').textContent).toBe('Войти');
        expect(queryByTestId('form-name-input')).toBeTruthy();
    });
});
