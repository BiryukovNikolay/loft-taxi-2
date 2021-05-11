import React from 'react';
import { Header } from './Header';
import {render, fireEvent} from '@testing-library/react';

jest.mock('./Map', () => ({Map: () => <div>Map Page</div>}));
jest.mock('./Profile', () => ({Profile: () => <div>Profile Page</div>}));
jest.mock('./Start', () => ({Profile: () => <div>Start Page</div>}));

describe('Header', () => {
    it('renders correctly', () => {
        const {container} = render(<Header />)
        expect(container.innerHTML).toMatch('Home component')
    }) 

    describe('when click on nav buttons', () => {
        it('open the corresponding page', () => {
            const { getByText, container } = render(<Header />)

            fireEvent.click(getByText('Карта'))
            expect(container.innerHTML).toMatch('Map Page')
            fireEvent.click(getByText('Профиль'))
            expect(container.innerHTML).toMatch('Profile Page')
            fireEvent.click(getByText('Выйти'))
            expect(container.innerHTML).toMatch('Start Page')
        })
    })
})
