import React from 'react';
import ReactDom from 'react-dom';



describe('Story Component', () => {


    it('renders without crashing', () => {

        jest.doMock('../Stories');

        const { default: App } = require('../App')
        const div = document.createElement('div');

        ReactDom.render(<App />, div);

        ReactDom.unmountComponentAtNode(div);
    });

   
});