import express, { Application } from 'express';
import cors from 'cors';
import config from './config'
const app: Application = express();
app.use(
  cors({
    origin: config.appUrl || 'http://localhost:3000',
    credentials: true,
  }),
);
app.use((req, res, next) => {
  const origin = req.headers.origin || config.appUrl || 'http://localhost:3000';
  res.setHeader('Access-Control-Allow-Origin', origin);
  next();
});
// app.all('/api/auth/*splat', toNodeHandler(auth));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
export default app;
