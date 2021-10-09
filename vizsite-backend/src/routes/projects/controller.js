/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { Readable } from 'stream';
import {
  FIREBASE_DB_PROJECT, FIREBASE_DB_SITE, STATUS_CODE_CREATED, STATUS_CODE_SUCCESS,
} from '../../common/constants';
import { createProject } from './services';

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '702964580370-3fft350br659o1buqqicfbi62r7dum4q.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//043pvVd1fk_FaCgYIARAAGAQSNwF-L9Ir6RDXQt0STKHUTSJDzmAxxTZbehnMVtskLrxGBwlztsf6m85fAUvq3SBfW29JzhjvOZo';
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

async function updateFile(fileId, fileName, fileContent) {
  const s = new Readable();
  s.push(fileContent);
  s.push(null);
  try {
    const response = await drive.files.update({
      fileId,
      requestBody: {
        name: fileName,
        mimeType: 'text/plain',
      },
      media: {
        mimeType: 'text/plain',
        body: s,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function createFile(fileName) {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        mimeType: 'text/plain',
      },
      media: {
        mimeType: 'text/plain',
        body: "<body  id = '1' style = '' > \n </body>",
      },
    });
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });
    const result = await drive.files.get({
      fileId: response.data.id,
      fields: 'webViewLink,webContentLink',
    });
    return response.data.id;
  } catch (error) {
    console.log(error);
  }
}

export const getAllProjectsController = async (req, res) => {
  const { uid } = req.user;
  const result = await req.db.collection(FIREBASE_DB_PROJECT).get({ uid });
  const resultArray = [];
  result.forEach((doc) => {
    resultArray.push(doc.data());
  });
  res.status(STATUS_CODE_SUCCESS).json({ data: resultArray });
};

export const createProjectController = async (req, res) => {
  const { db, user, body } = req;
  const Project = body;
  const fileId = await createFile(user.uid);
  const fileData = await drive.files.get({
    fileId,
    fields: 'webViewLink,webContentLink',
  });
  const newProject = await createProject({
    db, user, Project, fileId, fileLink: fileData.data.webContentLink,
  });
  res.status(STATUS_CODE_CREATED).json({ data: newProject });
};

export const getProjectByIdController = async (req, res) => {
  const { user, body } = req;
  const { uid } = req.user;
  let data;
  const projectData = await req.db.collection(FIREBASE_DB_PROJECT).where('siteId', '==', req.params.id).get();
  projectData.forEach(async (doc) => {
    data = doc.data();
  });
  const siteData = await req.db.collection(FIREBASE_DB_SITE).where('_id', '==', req.params.id).get();
  siteData.forEach(async (doc) => {
    res.status(STATUS_CODE_SUCCESS).json({ data, site: doc.data() });
  });
};

export const updateProjectController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).set(req.body);
  res.status(STATUS_CODE_SUCCESS).json({ data: result });
};

export const deleteProjectController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).delete();
  res.status(STATUS_CODE_SUCCESS).json({ data: result });
};

export const saveCodeController = async (req, res) => {
  const { user, body } = req;
  await req.db.collection(FIREBASE_DB_SITE).doc(body.siteId).update({ siteObj: body.node });
  updateFile(body.fileId, user.uid, body.code);
  res.status(STATUS_CODE_CREATED).json({ data: {} });
};
