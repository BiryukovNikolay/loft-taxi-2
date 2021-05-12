import React from 'react';
import Header from './Header';
import {render, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';

const mockFuncGoToPage = jest.fn();
const mockFuncLogOut = jest.fn();

describe('Header', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot()
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
