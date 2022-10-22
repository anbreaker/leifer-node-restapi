import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

// Connect to DB
import { dbConnection } from './database/db.config.js';

dbConnection();

// Routes
import tracks from './routes/tracks.routes';
import storages from './routes/storages.routes';

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

// Static files
app.use(express.static(path.join(__dirname, 'storage')));

// Data format form
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/tracks', tracks);
app.use('/api/storages', storages);
