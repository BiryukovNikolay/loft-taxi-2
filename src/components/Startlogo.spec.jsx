import React from 'react';
import Startlogo from './Startlogo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Startlogo />).toJSON();
    expect(tree).toMatchSnapshot()
})
