import express, { Application } from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import config from './config';
import { auth } from './lib/auth';
import { userRoute } from './modules/user/user.route';
import { categoryRoute } from './modules/category/category.route';
const app: Application = express();
app.use(
  cors({
    origin: config.appUrl || 'http://localhost:3000',
    credentials: true,
  }),
);
app.use((req, res, next) => {
  const origin = config.appUrl || 'http://localhost:3000';
  res.setHeader('Access-Control-Allow-Origin', origin);
  next();
});

app.use(express.json());
app.all('/api/auth/*splat', toNodeHandler(auth));
app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
export default app;
