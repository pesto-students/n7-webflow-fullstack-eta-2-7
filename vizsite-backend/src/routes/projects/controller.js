import { createProject } from './services';

export const getAllProjectsController = async (req, res) => {
  const result = await req.db.collection('projects').get();
  const resultArray = [];
  result.forEach((doc) => {
    resultArray.push(doc.data());
  });
  res.status('200').json(resultArray);
};

export const createProjectController = async (req, res) => {
  const Project = req.body;
  await createProject(req.db, Project);
  res.status('201').json(Project);
};

export const getProjectByIdController = async (req, res) => {
  const result = await req.db.collection('projects').doc(req.params.id).set(req.body);
  res.status('200').json(result);
};

export const updateProjectController = async (req, res) => {
  const result = await req.db.collection('projects').doc(req.params.id).set(req.body);
  res.status('200').json(result);
};

export const deleteProjectController = async (req, res) => {
  const result = await req.db.collection('projects').doc(req.params.id).delete();
  res.status('200').json(result);
};
