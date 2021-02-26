import express from 'express';
import test from './test';

const app: express.Application = express();

app.use('/test', test);

export default app;
