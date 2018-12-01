const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then( () => {
        const server = express();

        server.get('/p/:id', (req, res) => {
            const actualPage = '/post'; // rendering it on past.js
            const queryParam = {id: req.params.id};

            app.render(req, res, actualPage, queryParam);
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })
        server.listen(3000, (err) => {
            if(err) throw err
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })