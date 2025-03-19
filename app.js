import express from 'express';

const app = express();
import cors from 'cors';
const port = process.env.SERVER_PORT || 3000;

import movieRouter from './routes/movieRouter.js';
import imagePathMiddleware from './middlewares/imagePath.js';

app.use(
  cors({
    origin: process.env.FRONTEND_APP,
  })
);

app.use( express.static('public') );
app.use( express.json() );
app.use( imagePathMiddleware );
app.use('/movies' , movieRouter);

app.listen(port, () => {
  console.log(`Server Movies in funzione sulla porta: ${port}`);
});