import React from 'react';
import ReactDom from 'react-dom';
import App from '@main/App';

export default () => <App/>;

export const mount = (Сomponent) => {
    ReactDom.render(
        <Сomponent/>,
        document.getElementById('app')
    );
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};

