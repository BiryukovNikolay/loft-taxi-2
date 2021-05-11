import React from 'react';
import Map from './Start';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Map />).toJSON();
    expect(tree).toMatchSnapshot()
}) 
