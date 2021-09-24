import { Router } from 'express';
import {
  getAllProjectsController,
  createProjectController,
  getProjectByIdController,
  updateProjectController,
  deleteProjectController,
} from './controller';

// write get,post,put,delete apis for projects

const projects = Router();

projects.get('/', getAllProjectsController)
  .post('/', createProjectController)
  .get('/:id', getProjectByIdController)
  .put('/:id', updateProjectController)
  .delete('/:id', deleteProjectController);

export default projects;
