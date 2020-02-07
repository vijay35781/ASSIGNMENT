import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

test('render without crashing', () => {
    shallow(<Header />);
});

test('includes heading', () => {
   const header = shallow(<Header />);
   expect(header.containsMatchingElement(<p className="text-center pb-1">I am thinking a number from 1 to 10</p>)).toEqual(true);
});

test('includes paragraph', () => {
    const header = shallow(<Header />);
    expect(header.containsMatchingElement(
        <p className="p-2">You must guess what it is in three tries</p>
    )).toEqual(true);
});