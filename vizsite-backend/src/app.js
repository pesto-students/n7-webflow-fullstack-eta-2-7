import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {sites,projects} from './routes/index';
import admin from 'firebase-admin'

require('dotenv').config()

var app = express();
var serviceAccount = require("../vizsite-56474-firebase-adminsdk-nkw2x-917582bee5.json");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vizsite-56474.firebaseio.com" // TODO - Change to your Firebase URL
});

const db = admin.firestore();

app.use('/sites',sites(db));
app.use('/projects',projects(db));

app.listen(3001, function () {
    console.log('Express server listening on port 3000');
});