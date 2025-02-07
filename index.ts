// const express = require('express');
import express,{ Request, Response } from 'express';
// const bookRouter = require('./app/routes/book.routes')
// const authRouter = require('./app/routes/auth.routes')
import fakeBookRouter from './app/routes/fakeBook.routes'
const app = express();
 

app.use(require('body-parser').json())

app.get('/',(req:Request, res:Response) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello world from new second branch!\n');
})
// app.use(bookRouter)
// app.use(authRouter)
app.use(fakeBookRouter)
// starts a simple http server locally on port 3000
app.listen(3000, () => {
  console.log('Listening on 3000');
});