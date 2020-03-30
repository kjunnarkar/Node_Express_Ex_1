const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log(req.headers)
        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`**********Server is listening on ${hostname}: ${port}**********`);
});
