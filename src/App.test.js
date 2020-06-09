import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkApp from './App';

test('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetworkApp />, div);
    ReactDOM.unmountComponentAtNode(div)
});
