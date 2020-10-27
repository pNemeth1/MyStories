import React from 'react';
import ReactDom from 'react-dom';

// import { shallow, mount } from 'enzyme';


import StoryForm from '../StoryForm';


describe('StoryForm Component', () => {



    it('renders without crashing', () => {

        const div = document.createElement('div');

        ReactDom.render(<StoryForm />, div);

        ReactDom.unmountComponentAtNode(div);
    });

   
});