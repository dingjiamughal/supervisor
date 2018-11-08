const express = require('express');
const {
    Nuxt,
    Builder
} = require('nuxt');
const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8801;
const path = require('path');

const config = require('../nuxt.config.js');

app.set('port', port);
// const server = require('http').createServer(app);
// const io = socketIo(server);

if (process.env.NODE_ENV === 'development') {
    const mockup = require('./mockup');

    const bodyParser = require('body-parser');
    const multer = require('multer');
    const upload = multer();
    // for parsing application/json
    app.use('/api', bodyParser.json());
    // for parsing application/x-www-form-urlencoded
    app.use('/api', bodyParser.urlencoded({extended: true}));
    // for parsing multipart/form-data
    app.use('/api', upload.any());

    app.use('/api', mockup({
        type: 'uri',
        path: path.resolve(__dirname, '../mock'),
        delay() {
            return Math.random() * 1000 + 500;
        },
        method: 'all'
    }));
}

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    // Build only in dev mode
    if (process.env.NODE_ENV === 'development') {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Listen the server
    // app.listen(port);

    const server = app.listen(port, host);
    const socket = require('./socket')(server);

    console.log('Server listening on http://' + host + ':' + port); // eslint-disable-line no-console
}
start();
