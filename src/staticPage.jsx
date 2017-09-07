var React = require('react');
var ReactDOMServer = require('react-dom/server');
import {App} from './components/index'

module.exports = function () {
    return ReactDOMServer.renderToStaticMarkup(<App/>);
};

