import React from 'react';
import Game from './Game';
import { mount } from 'enzyme';

test('render without crashing', () => {
    mount(<Game />);
});