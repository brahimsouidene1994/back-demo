import express, { Request, Response } from 'express';
import sequelize from './app/config/database';
import bookRouter from './app/routes/book.routes';
import authRouter from './app/routes/auth.routes';
// import fakeBookRouter from './app/routes/fakeBook.routes';

const app = express();

app.use(require('body-parser').json())

app.get('/', (req: Request, res: Response) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello world from new second branch!\n');
})

// app.use(fakeBookRouter)
app.use(bookRouter)
app.use(authRouter)

// starts a simple http server locally on port 3000
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(3000, () => {
      console.log('Listening on 3000');
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });