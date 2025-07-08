const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('pages/index.html', (err, html) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(html);
      res.end();
    });
  } else if (req.url === '/form' && req.method === 'GET') {
    fs.readFile('pages/form.html', (err, html) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(html);
      res.end();
    });
  } else if (req.url === '/create' && req.method === 'POST') {
    const data = [];

    req.on('data', (chunk) => {
      data.push(chunk);
    });
    req.on('end', () => {
      const result = Buffer.concat(data).toString();
      const parseData = result.split('=')[1];
      fs.appendFile('./data/info.txt', parseData, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('success');
          res.end();
        }
      });
    });
  } else {
    res.write('Not found page');
    res.end();
  }
});
server.listen(3000);
console.log('nodejs server at port 3000');
