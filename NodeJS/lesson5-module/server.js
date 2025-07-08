
const http = require('http');
const routes = require('./module/routes.js');

const server = http.createServer(routes);
server.listen(3000);
console.log('nodejs server at port 3000');






