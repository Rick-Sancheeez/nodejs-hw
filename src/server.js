import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { errors } from 'celebrate';
import cookieParser from "cookie-parser";

import {connectMongoDB} from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';

//import {authenticate} from './middleware/authenticate.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

//app.use('/notes', authenticate);
app.use(notesRoutes); 
app.use(authRoutes);

app.use(notFoundHandler);

app.use(errors());
app.use(errorHandler);

await connectMongoDB();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});