import React from 'react';
import ReactDom from 'react-dom';


import Landing from '../Landing';


describe('Profile Component', () => {



    it('renders without crashing', () => {

        const div = document.createElement('div');

        ReactDom.render(<Landing />, div);

        ReactDom.unmountComponentAtNode(div);
    });

    it('Shows header correctly', () => {

        const div = document.createElement('div');

        ReactDom.render(<Landing />, div);

        expect(div.querySelector('h1').textContent).toBe('MyStories');

        ReactDom.unmountComponentAtNode(div);
    });

   
});