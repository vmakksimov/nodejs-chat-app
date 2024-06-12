const fs = require('fs');
const app = require('./index');
const http = require('http');
const server = http.createServer(app);

const PORT = 70;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})