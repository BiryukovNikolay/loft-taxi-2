import React from 'react';
import Logo from './Logo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot()
})
