//console.log('message');
const http = require('http');


const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.statusMessage = "OK";
  res.write("<h1>Hello World</h1>");
  res.end();
});
server.listen(3000);
console.log('nodejs server at port 3000');





