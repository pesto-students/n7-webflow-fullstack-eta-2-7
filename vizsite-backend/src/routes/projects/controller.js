import { FIREBASE_DB_PROJECT, STATUS_CODE_CREATED, STATUS_CODE_SUCCESS } from '../../common/constants';
import { createProject } from './services';

export const getAllProjectsController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).get();
  const resultArray = [];
  result.forEach((doc) => {
    resultArray.push(doc.data());
  });
  res.status(STATUS_CODE_SUCCESS).json(resultArray);
};

export const createProjectController = async (req, res) => {
  const Project = req.body;
  await createProject(req.db, Project);
  res.status(STATUS_CODE_CREATED).json(Project);
};

export const getProjectByIdController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).set(req.body);
  res.status(STATUS_CODE_SUCCESS).json(result);
};

export const updateProjectController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).set(req.body);
  res.status(STATUS_CODE_SUCCESS).json(result);
};

export const deleteProjectController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).delete();
  res.status(STATUS_CODE_SUCCESS).json(result);
};
