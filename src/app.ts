import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// Connect to DB
import { dbConnection } from './database/db.config.js';

dbConnection();

// Routes
import tracks from './routes/tracks.routes';

// Initializations
export const app = express();

//middlewares

// comunications with other servers
app.use(cors());

// Helmet can help protect your app from some well-known web vulnerabilities
// by setting HTTP headers appropriately.
app.use(helmet());

// sms servers develops
app.use(morgan('dev'));

// format json to object
app.use(json());

// Data format form
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/tracks', tracks);
