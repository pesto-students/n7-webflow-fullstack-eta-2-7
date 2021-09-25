import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import admin from 'firebase-admin';
import { sites, projects } from './routes/index';

require('dotenv').config();

const app = express();
const serviceAccount = require('../vizsite-56474-firebase-adminsdk-nkw2x-917582bee5.json');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vizsite-56474.firebaseio.com',
});

const db = admin.firestore();

app.use(async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(accessToken);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use('/sites', sites);
app.use('/projects', projects);

app.listen(3001, () => {
  console.log('Express server listening on port 3001');
});
