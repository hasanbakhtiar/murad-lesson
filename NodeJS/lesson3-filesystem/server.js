const http = require('http');
const fs = require('fs');




const server = http.createServer((req, res) => {

  if (req.url === '/') {
    fs.readFile('pages/index.html', (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();

    })


  } else if (req.url === '/about') {
    fs.readFile('pages/about.html', (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();

    })

  } else {
    fs.readFile('pages/notfound.html', (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();

    })

  }

});
server.listen(3000);
console.log('nodejs server at port 3000');





