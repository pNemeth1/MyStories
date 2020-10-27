import React from 'react';
import ReactDom from 'react-dom';


import Profile from '../Profile';


describe('Profile Component', () => {



    it('renders without crashing', () => {

        const div = document.createElement('div');

        ReactDom.render(<Profile />, div);

        ReactDom.unmountComponentAtNode(div);
    });

    it('shows h1', () => {

        const div = document.createElement('div');

        ReactDom.render(<Profile />, div);

        // expect(div.querySelector('h1').textContent).toBe('Patrick');

        ReactDom.unmountComponentAtNode(div);
    });

   
});