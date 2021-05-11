import React from 'react';
import { StartForm } from './StartForm';
import { render, fireEvent } from '@testing-library/react';

describe('StartForm', () => {
    it('changes form after click', () => {
        
        const { getByTestId } = render(<StartForm/>)

        fireEvent.click(getByTestId('form-change-button'));
        expect(getByTestId('form-title').textContent).toBe('Регистрация');
        expect(getByTestId('form-name-input')).toBeTruthy();

        fireEvent.click(getByTestId('form-change-button'));
        expect(getByTestId('form-title').textContent).toBe('Войти');
        expect(getByTestId('form-name-input')).toBeFalsy();
    });
});
