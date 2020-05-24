import cors from 'cors';
import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import RateLimit from 'express-rate-limit';
import helmet from 'helmet';
import path from 'path';
import { Database } from './db';
import { healthRoute, teacherRoute } from './routes';

// Initialize DB
Database.db().then();

// Configs
const app = express();
const limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests.'
});

// Middleware
app.enable('trust proxy');
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

app.use(limiter);
app.use(mongoSanitize());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Endpoints
app.use('/api/', healthRoute);
app.use('/api/', teacherRoute);

export default app;
