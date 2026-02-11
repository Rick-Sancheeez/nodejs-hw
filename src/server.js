import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import {connectMongoDB} from './db/connectMongoDB';
import {notesRouter} from './routes/noteRoutes';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import { notFoundHandler } from './middleware/notFoundHandler';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.use(notesRouter); 

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});