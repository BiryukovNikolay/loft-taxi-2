import React from 'react';
import Start from './Start';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Start />).toJSON();
    expect(tree).toMatchSnapshot()
});