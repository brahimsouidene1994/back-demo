const express = require('express');
const bookRouter = require('./app/routes/book.routes')
const authRouter = require('./app/routes/auth.routes')
const app = express();
const {checkCon} = require('./app/config/database');

app.use(require('body-parser').json())

app.get('/',(req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello world from new second branch!\n');
})
app.use(bookRouter)
app.use(authRouter)
checkCon()
// starts a simple http server locally on port 3000
app.listen(3000, () => {
  console.log('Listening on 3000');
});