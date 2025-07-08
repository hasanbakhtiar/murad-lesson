const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('ExpressJS server listening on port 3000');
});
