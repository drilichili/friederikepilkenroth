const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ButtonAppBar = require('./components/ButtonAppBar');

const app = express();

app.get('/', (req, res) => {
    const html = ReactDOMServer.renderToString(<ButtonAppBar />);
    res.send(html);
});

app.listen(3000, () => {
    console.log('Express server listening on port 3000');
});
