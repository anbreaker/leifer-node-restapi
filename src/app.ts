import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

const ENGINE_DB = process.env.ENGINE_DB;

// Connect to DB
import { dbConnectionMongo } from './database/db.config.mongo.js';
import { dbConnectionSql } from './database/db.config.sequlize.js';

ENGINE_DB === 'nosql' ? dbConnectionMongo() : dbConnectionSql();

// Routes
import auth from './routes/auth.routes';
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
app.use('/api/auth', auth);
app.use('/api/tracks', tracks);
app.use('/api/storages', storages);
