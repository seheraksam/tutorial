const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.end('Welcome to our home page');
    } else if (req.url === '/about') { // burada 'else if' kullanılmalı
      res.end('Here is our short history');
    } else {
      res.end(`
        <h1>Opps</h1>
        <p>skdmsdmsdmsmdskmdksdksmdksd</p>
        <a href="/">back home</a>
      `);
    }
  });
  
  server.listen(5000);
  