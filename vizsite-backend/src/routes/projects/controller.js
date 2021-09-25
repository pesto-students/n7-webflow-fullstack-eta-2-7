import { FIREBASE_DB_PROJECT, STATUS_CODE_CREATED, STATUS_CODE_SUCCESS } from '../../common/constants';
import { createProject } from './services';

export const getAllProjectsController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).get();
  const resultArray = [];
  result.forEach((doc) => {
    resultArray.push(doc.data());
  });
  res.status(STATUS_CODE_SUCCESS).json({ data: resultArray });
};

export const createProjectController = async (req, res) => {
  const { db, user, body } = req;
  const Project = body;
  const newProject = await createProject({ db, user, Project });
  res.status(STATUS_CODE_CREATED).json({ data: newProject });
};

export const getProjectByIdController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).set(req.body);
  res.status(STATUS_CODE_SUCCESS).json({ data: result });
};

export const updateProjectController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).set(req.body);
  res.status(STATUS_CODE_SUCCESS).json({ data: result });
};

export const deleteProjectController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).delete();
  res.status(STATUS_CODE_SUCCESS).json({ data: result });
};
