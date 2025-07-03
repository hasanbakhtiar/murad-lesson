//console.log('message');
const http = require('http');


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.write("<h1>Home Page</h1>");
    res.end();

  } else if (req.url === '/about') {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.write("<h1>About page</h1>");
    res.end();

  } else {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.write("<h1>Not Found Page</h1>");
    res.end();

  }


  res.end();
});
server.listen(3000);
console.log('nodejs server at port 3000');






