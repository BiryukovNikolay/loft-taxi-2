import React from 'react';
import ReactDom from 'react-dom';
import Start from './Start';
import { shallow } from 'enzyme';
import StartForm from '../components/StartForm';
import StartLogo from '../components/Startlogo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Start />).toJSON();
    expect(tree).toMatchSnapshot()
}) 