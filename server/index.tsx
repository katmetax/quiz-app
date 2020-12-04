import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '../src/App';

const PORT = 8080;
const app = express();

app.get('/', (_req, res) => {
    const app = ReactDOMServer.renderToString(<App />);

    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occured');
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${app}</div>`
            )
        )
    })
}
);

app.use(
    express.static(path.resolve(__dirname, '..', 'build'))
);

app.listen(PORT, () => {
  console.log(`SSR running on ${PORT}`);
});
